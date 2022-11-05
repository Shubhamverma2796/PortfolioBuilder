const express = require('express');
const app = express();
const open = require('open');
const fs = require('fs');
const json = JSON.parse(fs.readFileSync(process.argv[2],{encoding:"utf-8"}));
const build = require('./schedule.js')

//static file
app.use(express.static("./public/media/memoji"))
app.use(express.json());


app.get('/',(req,res)=>{
    fs.createReadStream('./memoji.html').pipe(res);
})

app.post('/build',(req,res)=>{
    json.memoji = req.body.memoji;
    fs.writeFileSync("./src/json/final.json",JSON.stringify(json));
    build(json.name.toLowerCase().replace(/\s+/g, ''));
    res.send("Done");
})


app.listen(2000,()=>{
    open('http://localhost:2000');
})
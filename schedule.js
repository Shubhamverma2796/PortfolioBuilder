const {exec} = require('child_process');

function build(domain) {
    exec('npm run build',(stderr,stdout)=>{
        
        if(stderr) {
            console.log(`error : ${stderr}`);
            return;
        }

        console.log("Project built.......");
        console.log("-------------------");
        console.log("\n");
        console.log("Pushing to surge");
        console.log("\n");
        console.log("-------------------");
        exec('npm run build');
        exec(`surge ./build --domain https://${domain}.surge.sh`,()=>{
        console.log(`Site pushed online at https://${domain}.surge.sh`);
        process.exit(0);
      });
    })
}

module.exports = build;

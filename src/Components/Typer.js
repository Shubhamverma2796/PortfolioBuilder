import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor} from 'react-simple-typewriter'
function Typer(props) {
    const name = props.name
    const [wordArray,setWord] = useState([]);
    const [size, setSize] = useState(null);
    const [text] = useTypewriter({
        words: ["Hello, I'm"],
        // delaySpeed: 1500
    })
    const [disName] = useTypewriter({
        words: wordArray,
        typeSpeed: 150
    })

  function respondWindowSize() {
    let width = window.innerWidth;
    if (width > 992) {
        setSize("45px");
    }
    if (width < 992 && width > 768) {
        setSize("40px");
    }
    if (width < 768) {
        setSize("28");
    }
    if (width < 400) {
        setSize("24px");
    }
  };

    useEffect(() => {
        var temp = name[0].toUpperCase() + name.slice(1);
        setWord([temp]);
    },[text])

    //call resize only for the first mounting
    useEffect(()=>{
        window.addEventListener("resize", respondWindowSize);
        respondWindowSize();
    },[])


    return (
        <div className="typo" >
            <div className="hero-title">
                <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: 'white',
                    fontWeight: '800',
                    fontSize: '45px',
                }}>{text}
                </span>
                <Cursor/>
                <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 800,
                    color: "rgba(87,78,255,1)",
                    fontSize: '45px',
                    marginLeft: "10px",
                }}>{disName}
                </span>
                <Cursor />
            </div>
        </div >
    )
}

export default Typer;

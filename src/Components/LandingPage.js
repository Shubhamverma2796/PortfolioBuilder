import Memoji from './Memoji';

import Home from './Home';
import jfile from "../json/final.json"

function LandingPage(){
    return(
        <div className="blackbg">
            <div className="container">
                <Home json = {jfile}/>
                <Memoji src={jfile.memoji}/>
            </div>
        </div>
    )
}

export default LandingPage;
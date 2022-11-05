import Stepper from "./Stepper";
import Skills from "./Skills";

function Experience(props) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ marginTop: "20px", padding: "16px" }} className="title"  >Experience</h1>
            <div style={{ width: "100%" }}>
                <Stepper stepContent={props.exp.details} />
            </div>
            <div style={{ width: "100%" }}>
                <h1 className="title">Skills</h1>
                <Skills list={props.exp.list} />
            </div>
        </div>
    )
}


export default Experience;
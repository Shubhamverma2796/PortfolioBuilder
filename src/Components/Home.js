import Typer from "./Typer";
import { Link, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Links from "./Link"
import Description from "./Description"

import "../css/modal.css";
import ModalButton from "./ModalButton";
import Experience from "./Experience";

function Home(props) {
    const json = props.json
    return (
        <div>
            <div className="content" id="containerMain">
                <div className="stuff">
                    <Typer name={json.name} />
                    <div className="btns">
                        <Link
                            to={{
                                pathname: "/Projects",
                                state: props.json.projects,
                            }}
                        >
                            <button
                                className="purple btn-main"
                            >
                                Checkout my work
                            </button>
                        </Link>
                        <div className="resume">
                            <a href={props.json.resume} download>
                                <i className="fa fa-file" aria-hidden="true"></i>
                                <p>Resume / CV</p>
                            </a>
                        </div>

                        <ModalButton>
                            <Experience
                                exp={{
                                    list: props.json.skills,
                                    details: props.json.experience,
                                }}
                            />
                        </ModalButton>
                    </div>
                    <Description data={props.json.preface} />
                    <div className="links">
                        <Links
                            github={json.github}
                            linkedin={json.linkedin}
                            medium={json.medium}
                            mail={json.mail}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
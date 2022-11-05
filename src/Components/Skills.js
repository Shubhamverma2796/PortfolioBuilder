import { useEffect, useState } from "react";
import skill from "../json/names.json";
import "../css/colors.css";

function Skills(props) {
    const [actList, setActList] = useState([]);

    useEffect(() => {
        let newList = props.list.map((name) => {
            let result = window.stringSimilarity.findBestMatch(name, skill.list);
            console.log(result)
            return result.bestMatch.target;
        })
        setActList(newList)
    }, [props.list])

    const renderList = () => {
        return actList.map((title) => {
            return (
                <div key={title}>
                    <img
                        src={`./media/svg/${title}`}
                        alt={title}
                        style={{ verticalAlign: "top", margin: "6px 4px" }}
                    />
                </div>
            )
        })
    }

    return (
        <div className="flexit">
            {renderList()};
        </div>
    )
}

export default Skills;
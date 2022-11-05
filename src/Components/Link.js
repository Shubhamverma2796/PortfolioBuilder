

const icon = (name, link, img) => {
    return (
        <a className="icon" name={name} href={link}>
            <i className={"fa fa-" + img} aria-hidden="true"></i>
        </a>
    )
}

function Links(props) {
    return (
        <div className="links">
            {icon("git", props.github, "github-square")}
            {
                props.linkedin
                    ? icon("linkedin", props.linkedin, "linkedin-square")
                    : null
            }
            {props.medium ? icon("medium", props.medium, "medium") : null}
            {icon("mail", "mailto:" + props.mail, "envelope")}
        </div>
    )
}

export default Links;
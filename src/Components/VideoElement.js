

const disectUrl = (url = "") => {
    const yt = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
    const results = url.match(yt);
    if (results === null) return false;
    return results[5]; //Video id
}

function VideoElement(props,controls) {
    const disect = disectUrl(props.src);
    if (disect == false) {
        return (
            <video
                autoPlay
                muted
                style={{ width: "100%", maxHeight: "300px" }}
            >
                <source src={props.src} />
            </video>
        )
    }
    else {
        return (
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe
                style={{ width: "100%", height: "100%" }}
                src={`https://www.youtube.com/embed/${disect}`}
                controls
            ></iframe>
        );
    }
}

export default VideoElement;
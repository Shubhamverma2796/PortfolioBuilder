import VideoElement from './VideoElement'

function Memoji(props) {
    return(
        <div className="memoji">
            <VideoElement src={ "/media/memoji/" + props.src + ".mp4"}/>
        </div>
    )
}

export default Memoji;

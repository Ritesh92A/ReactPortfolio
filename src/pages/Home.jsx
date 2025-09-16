import TextPressure from "../components/TextPressure";
import video from '../assets/m1.mp4'


function Home() {
    return (
        <>
        <div className="text">
            <TextPressure text={ video } />
        </div>
        <div className="home">

            <div className="video-container">
                <video autoPlay loop muted  className="videoPlayer" src={video}></video>
            </div>

</div>
        </>
)
    ;
}

export default Home;
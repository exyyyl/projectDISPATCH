import "./styles/videoplayer.css"

export default function VideoPlayer() {
    return (
        <div className="main-block">
            <div className="video-container">
                <video src="/Dispatch1.mp4" className="videoplayer" loop autoPlay muted></video>
                <img src="https://images.squarespace-cdn.com/content/v1/673ecb02839de7577f9c0982/f8e98b9d-beac-46a1-bb2c-cf47276eec91/DISPATCH_LOGO_COLOR_FLAT.png?format=1500w" className="overlay-image" alt="Dispatch logo"/>
                <div className="vignette" aria-hidden="true"></div>
            </div>
        </div>
    );
}
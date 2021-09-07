import useAudio from "../useAudio/useAudio";
import "./Player.css";

const Player = ({song}) => {
    const [playing, toggle] = useAudio(song);

    return ( 
        <div className="music-btn">
            <button className="btn" onClick={toggle}>{playing ? "Pause 🎶" : "Play 🎶"}</button>
        </div>
     );
}
 
export default Player;
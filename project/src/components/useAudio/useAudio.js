import {useState, useEffect} from "react";
import song from "../../static/bensound-elevate.mp3";

const useAudio = () => {
    const [audio] = useState(new Audio(song));
    const [playing, setPlaying] = useState(false);
    
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    useEffect(() => {
        audio.addEventListener('ended', setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        }
    },[audio]);
    return [playing, toggle];
}
 
export default useAudio;
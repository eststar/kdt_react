import { FcAlarmClock } from "react-icons/fc";
import "./CurrentTime.css"

function CurrentTime(){
    return(
        <div className="h-2/3 flex flex-col justify-center items-center font-display">
            <FcAlarmClock className="w-full h-2/3 text-9xl"/>
            <span className="text-amber-700 font-bold text-5xl">현재시각 : {new Date().toLocaleTimeString()} </span>
        </div>
    )
}

export default CurrentTime
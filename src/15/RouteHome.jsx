import { useNavigate } from "react-router-dom"
import TailButton from "../components/TailButton"

export default function RouteHome() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <TailButton bColor="blue" caption={"페이지1"} onHandle={() => navigate("/p1/사과/바나나")} />
      </div>
    </div>
  )
}

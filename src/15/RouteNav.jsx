import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function RouteNav() {
  const indexNav = useNavigate();
  const handleClick = ()=>indexNav("/p2");
  
  return (
    <div className="w-full h-20 bg-amber-200 flex flex-row justify-center items-center gap-5">
      <Link to="/" className="p-3 text-xl flex flex-row hover:cursor-pointer hover:font-bold ">
        홈</Link>
      <Link to="/p1/사과/바나나" className="p-3 text-xl flex flex-row cursor-pointer hover:cursor-pointer hover:font-bold">
        페이지1</Link>
      <div onClick={handleClick} to="/p2" className="p-3 text-xl flex flex-row cursor-pointer hover:cursor-pointer hover:font-bold">
        페이지2</div>
    </div>
  )
}

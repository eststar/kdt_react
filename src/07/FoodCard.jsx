import Busan from "../assets/market/busan.png"
import Bank from "../assets/market/bank.png"
import Market from "../assets/market/market.png"
import { useState } from "react"

const category = {
  "광역지원센터": Busan, //"../src/assets/market/busan.png",
  "기초푸드뱅크": Bank, //"../src/assets/market/bank.png",
  "기초푸드마켓": Market, //"../src/assets/market/market.png",
}


export default function FoodCard({infoData}) {
  const [isActive, setIsActive] = useState(false);

  const showTelNum = ()=>{
    setIsActive(isActive=> !isActive);
  };

  return (
    <div className="p-5 h-full w-full flex flex-row justify-start items-start border-solid border-gray-200 border-5 space-x-6">
      <div className="h-full w-1/3">
        <img src={category[infoData["구분"]]} alt={category[infoData["구분"]]}
          className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-between items-start">        
        <h1 className="font-bold text-xl">{infoData["사업장명"]}</h1>
        <h2 className="font-bold text-lg">{infoData["운영주체명"]}</h2>
        <p>{infoData["사업장 소재지"]}</p>
        <div className="w-full h-10 bg-gray-500 text-white cursor-pointer" onClick={showTelNum}>
          {isActive &&
            <ul className="w-full h-full flex justify-center items-center space-x-6">
            <li>{infoData["연락처(대표번호)"]}</li>
            <li>{infoData["팩스번호"]}</li>
          </ul>          
          }
        </div>
      </div>
       
    </div>
  )
}

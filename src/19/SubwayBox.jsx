import AirCard from "./AirCard"
import Scode from "./scode.json"

const boxColor = {
  "green" : "text-green-950",
  "amber" : "text-amber-950",
};

export default function SubwayBox({ data, colorIdx }) {
    const thisColor = colorIdx%2 ==0 ? "green" : "amber";
    
    let dateInfo = data.controlnumber;
    if(dateInfo.length < 10){
        dateInfo = `0000000000`
        console.log("날짜 데이터 오류")
    }
    const thisYear = dateInfo.slice(0,4);
    const thisMonth = dateInfo.slice(4,6);
    const thisDate = dateInfo.slice(6,8);
    const thisHours = dateInfo.slice(8,10);

    const aircodes = Object.keys(Scode);
    
  // const makeCards=()=> data &&
  //   aircodes.map(item=> <AirCard key={item} airKey={item} airInfo={Scode[item]} airData={data.item} />);
  return (
    <div className="w-full">
      <div className={`font-bold ${boxColor[thisColor]}`}>
        {`${data.site} ${data.city} (시각 : ${thisYear}. ${thisMonth}. ${thisDate} ${thisHours}시)`}
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        { data &&
            aircodes.map(item=> <AirCard color={thisColor} airKey={item} airInfo={Scode[item]} airData={data[item]} key={item}/>)}
      </div>
    </div>
  )
}

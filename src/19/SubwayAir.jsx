import { useEffect, useRef, useState } from "react";
import TailSelect from "../components/TailSelect"
import SubwayBox from "./SubwayBox"
import Sarea from "./sarea.json"

const api = import.meta.env.VITE_PUBLICDATA_API_KEY;
export default function SubwayAir() {
  //serviceKey=9c99353dcfd0f081e53780b703224054981d115d8239cc325f7e6763f29519d7
  // &pageNo=1&numOfRows=5&resultType=json&controlnumber=2025111306
  const getDate = () => {
    const curDate = new Date();
    return curDate.toISOString().substring(0, 10);
  };

  let targetDate = getDate().replaceAll("-", ""); //`${curDate.getFullYear()}${curDate.getMonth() + 1}${curDate.getDate()}`;
  
  targetDate = `20251113`;

  const areaKeys = Sarea.map(item => item["코드"]);
  const areaNames = Sarea.map(item => item["측정소"]);
  const areaRef = useRef();
  const [sdata, setSdata] = useState();
  const [subwayBoxes, setSubwayBoxes] = useState();
  const dateRef = useRef(targetDate);

  // const changeDate = (e) => {
  //   targetDate = e.target.value.replaceAll("-", "");    
  // };

  const getFetchData = async () => {
    const baseURL = `/stationAir-api?&resultType=json&pageNo=1&numOfRows=50`;
    const url = `${baseURL}&serviceKey=${api}&controlnumber=${targetDate}&areaIndex=${areaRef.current.value}`;
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const itemData = data.response.body.items.item;

      itemData.sort((o1, o2) => o1.controlnumber % 100 - o2.controlnumber % 100);
      setSdata(itemData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = () => {
    // if (!dateRef.current.value || dateRef.current.value.length != 10) {
    //   alert("날짜 설정 오류");
    //   return;
    // }
    getFetchData();
  };

  useEffect(() => {
    if (!sdata)
      return;
    setSubwayBoxes(sdata.map((item, idx) =>
      <SubwayBox data={item} colorIdx={idx} key={item.controlnumber+idx} />
    ));
  }, [sdata]);

  return (
    <div className="m-5 flex flex-col ">
      <div className="w-full flex flex-row items-center">
        <h1 className="flex-1 text-3xl font-bold text-center">측정소 선택</h1>
        {/* <div className="flex-1 ">
          <label htmlFor="selDate"></label>
          <input type="date" id="selDate" ref={dateRef} max={getDate()} value={getDate()} onChange={changeDate}
            className="border-1 border-solid border-b-blue-600 p-2 rounded" />
        </div> */}
        <div className="flex-1 ">
          <TailSelect caption="측정소 선택" id="" keyData={areaKeys} valData={areaNames} ref={areaRef} onhandle={handleSelect} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        {subwayBoxes}
      </div>
    </div>
  )
}

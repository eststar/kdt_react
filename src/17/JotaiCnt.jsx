// import { useState, useEffect } from "react"
import { useAtom, useAtomValue } from "jotai";
import { cntAtom, dbCntAtom } from "./atomsCnt";

import JotaiCntDt from "./JotaiCntBt";

export default function JotaiCnt() {
    // const [cnt, setCnt] = useState(0);
    // const [doubleCnt, setDoubleCnt] = useState(0);
    // useEffect(()=>{
    //     setDoubleCnt(cnt*2);
    // }, [cnt]);

    // const [cnt, setCnt] = useAtom(cntAtom);
    // const dbCnt = useAtomValue(dbCntAtom);
    const cnt = useAtomValue(cntAtom);
    const dbCnt = useAtomValue(dbCntAtom);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">전역 상태 관리</h2>
      <div>
        <p className="font-bold text-amber-950">cnt : {cnt}</p>
        <p className="font-bold text-emerald-800">double count : {dbCnt}</p>
      </div>
      <div className="flex flex-row justify-evenly items-center gap-2">
        <JotaiCntDt />
      </div>
    </div>
  )
}

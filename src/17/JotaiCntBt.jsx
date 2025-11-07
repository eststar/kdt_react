import TailButton from "../components/TailButton"
import { useAtom } from "jotai";
import { cntAtom, dbCntAtom } from "./atomsCnt";

export default function JotaiCntDt(/* {cnt, onHandle} */) {
    const [cnt, setCnt] = useAtom(cntAtom);
    // const [testCnt, setTestCnt] = useAtom(dbCntAtom);
  return (
    <div>
      <TailButton bColor="blue" caption="증가" onHandle={()=>setCnt(cnt+1)}/>
      <TailButton bColor="orange" caption="감소" onHandle={()=>setCnt(cnt-1)}/>
      {/* <TailButton bColor="green" caption="테스트" onHandle={()=>setTestCnt(testCnt +3)}/> */}
    </div>
  )
}

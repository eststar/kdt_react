import TailButton from "../components/TailButton";
import TailSelect from "../components/TailSelect";

import { useState, useEffect, useRef } from "react";

import BusId from "./data/busid.json";
import ChgerType from "./data/chgertype.json";
import Kind from "./data/kind.json";
import KindDetail from "./data/kinddetail.json";
import Stat from "./data/stat.json";
import ZCode from "./data/zcode.json";
import ZScode from "./data/zscode.json";

export default function ChargerInfo() {
    
    const cityValue = Object.values(ZCode);
    
    const selCity = useRef("11");
    const districtValue = Object.values(ZScode[11]);
    console.log(ZScode[11]);
    
    const chargerTypeValue = Object.values(ChgerType);
    const kindDetail = Object.values(KindDetail['A0']);

        
    return (
        <div className="w-4/5 flex flex-col gap-10 m-10">
            <h1 className="text-4xl font-bold">전기차 충전소 정보</h1>
            <div className="grid grid-cols-6 gap-2 bg-rose-100 p-5">
                <TailSelect caption="시도" data={cityValue} onhandle={()=>{}}/>
                <TailSelect caption="지역동" data={districtValue} onhandle={()=>{}}/>
                <TailSelect caption="충전소구분" data={chargerTypeValue} onhandle={()=>{}}/>
                <TailSelect caption="충전소상세" data={kindDetail} onhandle={()=>{}}/>
                <TailButton bColor="blue" caption="검색" onHandle={() => {}} />
                <TailButton bColor="orange" caption="초기화" onHandle={() => {}} />

            </div>
        </div>
    )
}

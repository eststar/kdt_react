import TailButton from "../components/TailButton";
import TailSelect from "../components/TailSelect";
import DataCard from "./DataCard";

import { useState, useEffect, useRef } from "react";

import BusId from "./data/busid.json";
import ChgerType from "./data/chgertype.json";
import Kind from "./data/kind.json";
import KindDetail from "./data/kinddetail.json";
import Stat from "./data/stat.json";
import ZCode from "./data/zcode.json";
import ZScode from "./data/zscode.json";

const apiKey = import.meta.env.VITE_PUBLICDATA_API_KEY;
export default function ChargerInfo() {
    const cityRef = useRef();
    const districtRef = useRef();
    const kindRef = useRef();
    const detailRef = useRef();
   
    const [district, setDistrict] = useState();
    const [chargerKind, setChargerKind] = useState();
    const [detail, setDetail] = useState();

    const [data, setData] = useState();
    const [contents, setContents] = useState();

    const [isLoading, setIsLoading] = useState(false);
    //시도
    const cityKey = Object.keys(ZCode);
    const cityValue = Object.values(ZCode);
    
    //지역
    const onHandleCity =()=>{                
        if(cityRef.current.value != "" )
            setDistrict(ZScode[cityRef.current.value]);
        else setDistrict("");
    };

    //충전소 구분
    const onHandleDistrict =()=>{        
        if(districtRef.current.value != "")
            setChargerKind(Kind);
        else setChargerKind("");
    };

    //충전소 상세
    const onHandleKind =()=>{        
        if(kindRef.current.value != "")
            setDetail(KindDetail[kindRef.current.value]);
        else setDetail("");
    };

    const searchData =()=>{
        if(cityRef.current.value == ""){
            alert("시도를 선택하세요")
            cityRef.current.focus();
            return;
        }
        if(districtRef.current.value == ""){
            alert("지역동을 선택하세요")
            districtRef.current.focus();
            return;
        }
        if(kindRef.current.value == ""){
            alert("충전소구분을 선택하세요")
            kindRef.current.focus();
            return;
        }    
        if(detailRef.current.value == ""){
            alert("충전소 상세를 선택하세요")
            detailRef.current.focus();
            return;
        }
        setIsLoading(false);
        setData("");
        setContents("");
        getFetchData();
    };

    const getFetchData = async ()=>{
        const url = "http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?&numOfRows=10&pageNo=1&dataType=JSON"+
            `&serviceKey=${apiKey}`+
            `&zcode=${cityRef.current.value}&zscode=${districtRef.current.value}`+
            `&kind=${kindRef.current.value}&kindDetail=${detailRef.current.value}`;
        // console.log(url);
        setIsLoading(true);
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setData(data);            
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    const resetSelect = ()=>{
        cityRef.current.value = "";
        districtRef.current.value = "";
        kindRef.current.value = "";
        detailRef.current.value = "";
        setDistrict("");
        setChargerKind("");
        setDetail("");
        setData("");
        setContents("");
    };

    useEffect(()=>{
        if(!data || data.length <= 0)
            return;
        const cData = data.items.item;
        const countCards = Object.keys(Stat).map((item)=>
            <DataCard key={item} title={Stat[item]} number={cData.filter((el)=> el.stat == item).length}/>
        );
        const locCards = cData.map(()=>{});
        
        setContents(
            <div className="w-full flex flex-col">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
                    <DataCard title="충전소수" number={data.totalCount}/>
                    {countCards}
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">

                </div>
            </div>
        );
    },[data]);

    return (
        <div className="w-4/5 flex flex-col gap-10 m-10">
            <h1 className="text-4xl font-bold">전기차 충전소 정보</h1>
            <div className="grid grid-cols-6 gap-2 bg-rose-100 p-5">
                <TailSelect id="city" ref={cityRef} caption="시도" 
                    keyData={cityKey} valData={cityValue} onhandle={onHandleCity}/>
                <TailSelect id="district" ref={districtRef} caption="지역동" 
                    keyData={district ? Object.values(district): ""} valData={district ? Object.keys(district): ""} onhandle={onHandleDistrict}/>
                <TailSelect id="charger" ref={kindRef} caption="충전소구분" 
                    keyData={chargerKind ? Object.keys(chargerKind): ""} valData={chargerKind ? Object.values(chargerKind): ""} onhandle={onHandleKind}/>
                <TailSelect id="detail" ref={detailRef} caption="충전소상세" 
                    keyData={detail ? Object.values(detail): ""} valData={detail ? Object.keys(detail): ""} onhandle={()=>{}}/>
                <TailButton bColor="blue" caption="검색" onHandle={searchData} />
                <TailButton bColor="orange" caption="초기화" onHandle={resetSelect} />
            </div>
            <div className="flex justify-center">
                {isLoading ?<p className="text-lime-700 font-bold text-2xl ">로딩중</p> : contents}
            </div>
        </div>
    )
}

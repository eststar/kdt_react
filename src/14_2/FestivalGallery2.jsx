import TailCard from "../components/TailCard"
// import FestivalContents from "./FestivalContents";

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";

import { Suspense } from "react";
import { selDistrictAtom, festivalFetchData } from "./atomFestival";

export default function festival() {
    return (
        <Suspense fallback="로딩중...">
            <FestivalGallery2 />
        </Suspense>
    )
}

export function FestivalGallery2() {
    const data = useAtomValue(festivalFetchData);
    const [selDistrict, setSelDistrict] = useAtom(selDistrictAtom);

    //축제 정보    
    const [pData, setPData] = useState([]);
    //카드 출력용
    const [cardTags, setCardTags] = useState([]);
    //선택 단어
    const districtRef = useRef(selDistrict ?? "waitSelect");

    //최초 생성시 전체 데이터 일단 받아옴
    useEffect(() => {
        // getFetchData();
        setPData(data)
    }, []);

    useEffect(() => {
        const filteredData = pData.filter((item) => item.GUGUN_NM.includes(districtRef.current.value));
        setCardTags(filteredData.map((item, idx) =>
            <Link to="/FestivalGallery2/Contents" state={{ contents: item }} key={item.UC_SEQ + idx}>
                <TailCard url={item.MAIN_IMG_THUMB} title={item.TITLE}
                    subtitle={item.TRFC_INFO} infos={item.USAGE_DAY_WEEK_AND_TIME} key={item.UC_SEQ} />
            </Link>));
        
    }, [pData]);

    //카드 생성
    const handleChange = () => {
        //어차피 pData 없으면 다른 선택 메뉴 없음
        if (districtRef.current.value === "waitSelect") {
            setCardTags([]);
            return;
        }
        setSelDistrict(districtRef.current.value);
        const filteredData = pData.filter((item) => item.GUGUN_NM.includes(districtRef.current.value));
        setCardTags(filteredData.map((item, idx) =>
            <Link to="/FestivalGallery2/Contents" state={{ contents: item }} key={item.UC_SEQ + idx}>
                <TailCard url={item.MAIN_IMG_THUMB} title={item.TITLE}
                    subtitle={item.TRFC_INFO} infos={item.USAGE_DAY_WEEK_AND_TIME} key={item.UC_SEQ} />
            </Link>));
    };

    //지역구 선택했는데 아직 fetch 안됨
    const handleClick = (e) => {
        e.preventDefault();
        if (!pData || pData.length <= 0)
            alert("데이터 받는중...");
    };
    //지역구 선택 확장 메뉴
    const makeSelectBox = () => {
        if (!pData || pData.length <= 0)
            return;
        const districtSet = [...new Set(pData.map((item) => item.GUGUN_NM))];
        return districtSet.map((el) => <option value={el} key={el}>{el}</option>);
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-5">
            <div className="w-4/5 shadow-xl/30 flex flex-col justify-center items-center p-5 gap-5 bg-emerald-100">
                <h1 className="text-xl font-bold">부산광역시 부산축제정보 서비스</h1>
                <form className="w-full max-w-lg mx-auto">
                    <div className="col-span-2">
                        <select ref={districtRef} onChange={handleChange} onClick={handleClick}
                            defaultValue={'waitSelect'}
                            className="w-full border-2 border-solid bg-orange-100 border-gray-500 p-2 text-base focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="waitSelect">---지역선택---</option>
                            {makeSelectBox()}
                        </select>
                    </div>
                </form>
            </div>
            <div className="w-4/5 h-3/4 overflow-y-auto grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                {cardTags}
            </div>
        </div>
    )
}
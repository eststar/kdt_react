import { useState, useEffect } from "react"

import TrafficNav from "./TrafficNav"
import TrafficData from "./교통사고통계.json"
import TrafficInfo from "./TrafficInfo";

const apiKey = import.meta.env.VITE_PUBLICDATA_API_KEY;
export default function Traffic() {
    const baseURL = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117`;
    //전체데이터
    const [tData, setTData] = useState([]);
    //대분류
    const [categoryData, setCategoryData] = useState([]);
    const [selectedCat, setSelectedCat] = useState();
    //중분류
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [selectedSubCat, setSelectedSubCat] = useState();

    //데이터 대,중분류 선택후 배열
    const [selectedData, setSelectedData] = useState([]);
    const [showData, setshowData] = useState();

    //데이터 받아오는 함수
    const getFetchData = async () => {
        // fetch.then().catch((err)=>console.log(err));
        // setTData(TrafficData);
        const url = `${baseURL}&serviceKey=${apiKey}`;
        // console.log(url);
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setTData(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    //컴포넌트 생성시 실행
    useEffect(() => {
        getFetchData();
    }, []);

    //데이터 받아와졌으면 
    useEffect(() => {

        if (tData.length <= 0)
            return;
        // console.log(tData);
        const allCat = tData.map(el => el["사고유형대분류"]);
        const catData = [...new Set(allCat)];

        setCategoryData(catData);

    }, [tData]);

    //대분류 선택하면
    useEffect(() => {
        if (tData.length <= 0)
            return;
        const filteredData = tData.filter(el => el["사고유형대분류"] === selectedCat)
        const subCat = filteredData.map(el => el["사고유형중분류"])
        const subCatData = [...new Set(subCat)];

        setSubCategoryData(subCatData);
        setSelectedData(filteredData);
    }, [selectedCat]);

    //중분류 선택하면 사고건수, 사망자수, 중상자수, 경상자수, 부상신고자수
    useEffect(() => {
        if (tData.length <= 0)
            return;

        const filteredData = tData.filter(el =>
            el["사고유형대분류"] === selectedCat
            && el["사고유형중분류"] === selectedSubCat
        );

        setSelectedData(filteredData);

    }, [selectedSubCat]);

    //대분류 중분류 선택된 뒤에 나오는 배열을 순회하면서 info 컴포넌트 생성
    useEffect(() => {
        if (selectedData.length <= 0)
            return;
        setshowData(() =>
            selectedData.map((el, idx) => <TrafficInfo infoData={el} key={idx} />)
        );
    }, [selectedData]);

    return (
        <div className="flex flex-col justify-start items-start mt-10">
            {categoryData && <TrafficNav title="교통사고 대분류" data={categoryData} selected={setSelectedCat} />}
            {subCategoryData && <TrafficNav title="교통사고 중분류" data={subCategoryData} selected={setSelectedSubCat} />}
            {showData}
        </div>
    )
}

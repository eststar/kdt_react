import TailButton from "../components/TailButton";
import TailCard from "../components/TailCard"
import TailInput from "../components/TailInput";

import { useState, useEffect, useRef } from "react"


// "galContentId": "2586952",
// "galContentTypeId": "17",
// "galTitle": "서울빛초롱축제",
// "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg",
// "galCreatedtime": "20190109152342",
// "galModifiedtime": "20190109152354",
// "galPhotographyMonth": "201811",
// "galPhotographyLocation": "서울특별시 종로구",
// "galPhotographer": "라이브스튜디오",
// "galSearchKeyword": "서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제"

const apiKey = import.meta.env.VITE_PUBLICDATA_API_KEY;
export default function TourGallery() {
    // /photo-api -> https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1
    const baseUrl = "/photo-api/gallerySearchList1"
        + "?numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A"
        + "&_type=json";

    const [pData, setPData] = useState([]);
    const [cardTags, setCardTags] = useState([]);
    // const [searchWord, setSearchWord] = useState();
    const searchRef = useRef("");

    const getFetchData = async () => {
        if(searchRef.current.value == "")
            return;
        
        const url = `${baseUrl}&serviceKey=${apiKey}&keyword=${encodeURI(searchRef.current.value)}`;
        // console.log("url" , url)
        try {
            const resp = await fetch(url);
            const data = await resp.json();            

            setPData(data.response.body.items.item);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    // const createCards = () => pData.map((item) => <TailCard data={item} key={item.galContentId} />);

    // useEffect(() => {
    //     setCardTags(pData && createCards());
    // }, [pData]);

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchRef.current.value == ""){
            alert("키워드를 입력하세요");
            searchRef.current.focus();
            return;
        }        
        
        getFetchData();
        // setSearchWord(searchRef.current.value);
    };

    // useEffect(() => {
    //     console.log(searchRef.current.value)
    //     getFetchData();
    // }, [searchRef.current.value]);

    const handleClear = (e) => {
        e.preventDefault();
        searchRef.current.value = "";
        setPData([]);
        searchRef.current.focus();
        // setSearchWord(searchRef.current.value ?? "");
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-5">
            <div className="w-4/5 shadow-xl/30 flex flex-col justify-center items-center p-5 gap-5 bg-emerald-100">
                <h1 className="text-xl font-bold">한국관광공사 관광사진 정보</h1>
                <form className="grid grid-cols-3 gap-2 w-full max-w-lg mx-auto">
                    <div className="col-span-2">
                        <TailInput placeholder="검색키워드" type="text" name="location" ref={searchRef} />
                    </div>
                    <div className="flex gap-2">
                        <TailButton bColor="blue" caption="검색" onHandle={handleSearch} />
                        <TailButton bColor="blue" caption="취소" onHandle={handleClear} />
                    </div>
                </form>
            </div>
            <div className="w-4/5 h-3/4 overflow-y-auto grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                {/* {cardTags} */}
                {pData.map((item) => <TailCard url={item.galWebImageUrl} title={item.galTitle} 
                    subtitle={item.galPhotographyLocation} infos={item.galSearchKeyword.split(",")} key={item.galContentId} />)}            
            </div>            
        </div>
    )
}

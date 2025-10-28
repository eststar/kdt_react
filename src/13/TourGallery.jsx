import TailButton from "../components/TailButton";
import TailCard from "../components/TailCard"
import { useState, useEffect, useRef } from "react"

const apiKey = import.meta.env.VITE_PUBLICDATA_API_KEY;
export default function TourGallery() {
    const baseUrl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1"
        +"?numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A"
        +"&_type=json"+"&keyword=%EC%84%9C%EC%9A%B8%20%EC%95%BC%EA%B2%BD%20%EC%B6%95%EC%A0%9C";

    const [pData, setPData] = useState();
    const locRef = useRef();

    const getFetchData = async ()=>{
        const url = `${baseUrl}&serviceKey=${apiKey}`;
        console.log("url" , url)
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data.response.body.items.item);
        console.log(resp)
        setPData(data.response.body.items.item);
    };
    useEffect(()=>{
        getFetchData();
        // console.log(pData);

    }, []);
    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-5">
            <div className="w-4/5 shadow-xl/30 flex flex-col justify-start items-center p-5 gap-5">
                <h1 className="text-xl font-bold">한국관광공사 관광사진 정보</h1>
                <form className="flex flex-row justify-center items-center space-x-2 w-full">
                    <input type="text" name="location" ref={locRef} className="w-1/3 border-2 border-solid border-indigo-400"/>
                    <TailButton bColor="blue" caption="확인" onHandle={()=>{}} />
                    <TailButton bColor="blue" caption="취소" onHandle={()=>{}} />
                </form>
            </div>
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <TailCard />
            </div>
            
        </div>
    )
}

import TailButton from "../components/TailButton";
import TailCard from "../components/TailCard"
import { useState, useEffect, useRef } from "react"


const apiKey = import.meta.env.VITE_PUBLICDATA_API_KEY;
export default function TourGallery() {
    const [numRows, setNumRows] = useState(1);
    const [data, setData] = useState();
    const [pData, setPData] = useState([]);
    const [cardTags, setCardTags] = useState([]);
    const searchRef = useRef("");

    const baseUrl = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr"
        + "?pageNo=1&resultType=json";

    const getFetchData = async () => {               
        const url = `${baseUrl}&numOfRows=${numRows}&serviceKey=${apiKey}`;
        console.log(url);  

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            // console.log(data.item);
            setData(data);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFetchData();
        // setPData(()=> data.item ?? []);
        // setNumRows(()=> data.totalCount ?? 1);
    }, []);

    useEffect(()=>{
        if(!data)
            return;
        // console.log(pData.totalCount);
        setPData(data.item);
        setNumRows(data.totalCount);
    },[data]);

    useEffect(() => {
        getFetchData();
        searchRef.current.focus();
        // console.log(numRows);
    }, [numRows]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchRef.current.value == "") {
            alert("키워드를 입력하세요");
            searchRef.current.focus();
            return;
        }
        getFetchData();
    };
    const handleClear = (e) => {
        e.preventDefault();
        searchRef.current.value = "";
        setPData([]);
        searchRef.current.focus();
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-5">
            <div className="w-4/5 shadow-xl/30 flex flex-col justify-start items-center p-5 gap-5 bg-emerald-100">
                <h1 className="text-xl font-bold">부산광역시 부산축제정보 서비스</h1>
                <form className="flex flex-row justify-center items-center space-x-2 w-full">
                    <input placeholder="검색키워드" type="text" name="location" ref={searchRef} className="w-1/3 border-2 border-solid border-indigo-400 px-4 py-1" />
                    <TailButton bColor="blue" caption="검색" onHandle={handleSearch} />
                    <TailButton bColor="blue" caption="취소" onHandle={handleClear} />
                </form>
            </div>
            <div className="w-4/5 h-3/4 overflow-y-auto grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                {/* {cardTags} */}
                {/* {pData.map((item) => <TailCard data={item} key={item.galContentId} />)} */}
            </div>
        </div>
    )
}

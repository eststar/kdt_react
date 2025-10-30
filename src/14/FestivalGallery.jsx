import TailButton from "../components/TailButton";
import TailCard from "../components/TailCard"
import TailInput from "../components/TailInput";

import { useState, useEffect, useRef } from "react"

const apiKey = import.meta.env.VITE_PUBLICDATA_API_KEY;
export default function TourGallery() {
    //fetch해서 받아올 전체 데이터    
    const [data, setData] = useState();
    //기본데이터 중 사용할 축제 정보    
    const [pData, setPData] = useState([]);
    //받아올 축제 데이터 총개수. 시작시 하나만 받아와서 전체 데이터 개수 정보 알아옴
    const [numRows, setNumRows] = useState();
    const [cardTags, setCardTags] = useState([]);
    //검색할 단어
    const searchRef = useRef("");

    //기본 키없고, 불러올 데이터행 숫자 설정 없는 url
    const baseUrl = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr"
        + "?pageNo=1&resultType=json";

    //fetch 함수
    const getFetchData = async () => {
        const url = `${baseUrl}&numOfRows=${numRows ?? 1}&serviceKey=${apiKey}`;
        
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setData(data);
            if (!numRows)
                setNumRows(data.getFestivalKr.totalCount); //데이터 전송 받았으면 받을수 있는 전체 데이터 수 확인
            else
                setPData(data.getFestivalKr.item);
        } catch (error) {
            console.log(error);
        }
    };

    //최초 생성시 전체 데이터 일단 받아옴
    useEffect(() => {
        getFetchData();        
    }, []);

    //받아올 데이터 수 결정 되었으면 다시 fetch
    useEffect(() => {
        if (!numRows || !data || data.length <= 0)
            return;
        // console.log(numRows);
        getFetchData();
        // setPData(data.getFestivalKr.item);
        
        searchRef.current.focus();
    }, [numRows]);

    const handleSearch = (e) => {
        e.preventDefault();
        
        if (searchRef.current.value == "") {
            alert("키워드를 입력하세요");
            searchRef.current.focus();
            return;
        }
        if(!pData || pData.length <= 0){
            alert("데이터 받는중...");
            searchRef.current.focus();
            return;
        }
        const filteredData = pData.filter((item) => {
            
            for (let val of Object.values(item)) {
                if (isNaN(val) && val.includes(searchRef.current.value)){
                    console.log(val);
                    return true;
                }
            }
        });
        
        setCardTags(filteredData.map((item) => <TailCard url={item.MAIN_IMG_THUMB} title={item.TITLE}
            subtitle={item.TRFC_INFO} infos={item.USAGE_DAY_WEEK_AND_TIME.split(",")} key={item.UC_SEQ} />));
    };

    const handleClear = (e) => {
        e.preventDefault();
        searchRef.current.value = "";
        setPData([]);
        searchRef.current.focus();
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-5">
            <div className="w-4/5 shadow-xl/30 flex flex-col justify-center items-center p-5 gap-5 bg-emerald-100">
                <h1 className="text-xl font-bold">부산광역시 부산축제정보 서비스</h1>
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
                {cardTags}                
            </div>
        </div>
    )
}

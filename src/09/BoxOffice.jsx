import { useState, useEffect, useReducer } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const apiKey = import.meta.env.VITE_MV_API_KEY;
export default function BoxOffice() {
    const [movieData, setMovieData] = useState([]);
    const [trTags, setTrTags] = useState();
    const [movieInfo, setMovieInfo] = useState();
    

    const baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";

    //처음 생성시 어제 날짜 받아오기
        
    //오늘 날짜 연월일     
    
    //선택할때마다 날짜별로 데이터 받아오기
    const getYesterday = () => {
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${year}-${month}-${day - 1}`;
    };
    const [selDate, setSelDate] = useState(getYesterday());

    const handleSelectDate = (e) => {
        let dt = e.target.value.replaceAll('-','');
        
        getFetchData(dt);
    };

    //데이터 요청 fetch 함수
    const getFetchData = (day) => {
        let url = `${baseUrl}key=${apiKey}&targetDt=${day}`;        

        fetch(url).then((resp) => resp.json())
            .then((data) => {
                const boxOfficeData = data.boxOfficeResult.dailyBoxOfficeList;
                setMovieData(boxOfficeData);
            })
            .catch((err => console.log(err)));
    };

    const rankChange = (rankInten) => (rankInten == 0) ? "-" : (rankInten > 0) ? <span className="flex flex-row justify-center items-start">{Math.abs(rankInten)} <IoMdArrowDropup className="text-red-600" /></span>
        : <span className="flex flex-row justify-center items-start">{Math.abs(rankInten)}<IoMdArrowDropdown className="text-blue-600" /></span>;

    //컴포넌트 최초 생성시 한번 실행
    useEffect(() => {
        setSelDate(getYesterday());
        const curDate = selDate.replaceAll('-', '');
        getFetchData(curDate);
    }, []);

    useEffect(() => {
        setTrTags(movieData.map((el) =>
            <tr key={el.movieCd} className="hover:bg-indigo-400/50 even:bg-white odd:bg-gray-50" onClick={() => selectChart(el)}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >
                    {el.rank}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >
                    {el.movieNm}</td>
                <td className="text-end px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >
                    {parseInt(el.salesAmt).toLocaleString()}</td>
                <td className="text-end px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >
                    {parseInt(el.audiCnt).toLocaleString()}</td>
                <td className="text-end px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >
                    {parseInt(el.salesAcc).toLocaleString()}</td>
                <td className="text-end px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >
                    {parseInt(el.audiAcc).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >
                    {rankChange(el.rankInten)}</td>
            </tr>
        ));
    }, [movieData]);   

    const selectChart = (movie) => {
        if (movie !== null)
            setMovieInfo(
                `[${movie.rankOldAndNew}:${movie.openDt}] ${movie.movieNm}
                , 상영한 스크린수 : ${parseInt(movie.scrnCnt).toLocaleString()}, 상영횟수 : ${parseInt(movie.showCnt).toLocaleString()}`
            );
    };

    return (
        <div className="p-5">
            <h1 className="mb-2 font-bold text-xl flex flex-row justify-center items-center">일일 박스 오피스</h1>
            <div className="mb-2 flex flex-row justify-center items-center">
                <input type="date" name="date" value={getYesterday()} max={getYesterday()} onChange={handleSelectDate}/>
            </div>
            <table className="min-w-full divide-y divide-gray-200 border-collapse shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">
                            순위</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">
                            영화명</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">
                            매출액</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">
                            관객수</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">
                            누적 매출액</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">
                            누적 관객수</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">
                            누적 증감률</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {trTags}
                </tbody>
            </table>
            <div className="flex justify-center items-center h-1/10 bg-gray-200 text-center font-bold">
                {movieInfo}
            </div>
        </div>
    )
}

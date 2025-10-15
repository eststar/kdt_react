//import MyListData from './MyListData.json'
import { useState } from 'react';

export default function MyListItem({titleData, imgUrlData, contextData}/* {itemNum} */) {
    const [scnt, setScnt] = useState(0); //React 에서 제어위한 상태변수명, 제어함수 받아옴 //배열형식으로 받아와서 구조분해
    const [doubleCnt , setDoubleCnt] = useState(0);
    const [isize, setISize] = useState(0);
    const [hatecnt, setHatecnt] = useState(0);

    const imgUrl = imgUrlData;//MyListData[itemNum].imgUrl;
    const title = titleData;//MyListData[itemNum].title;
    const contexts = contextData;//MyListData[itemNum].content;
    
    const imgSize =  ["w-40 h-40" , "w-30 h-30"] ; 
    let cnt = 0;

    const handleClick=()=>{
        console.log(`${title} click`);
        cnt = scnt+hatecnt+1;
        // cnt++;
        // 밑에 setScnt에서 호출하는 scnt는 모두 현재 상태의 동일한 scnt.
        // 함수 내에서 scnt는 고정. 해결하기 위해서 setScnt(()=>{})처럼 내부에서 함수형으로 사용. 람다식
        // REACT는 성능 위해 함수 묶어서 실행?
        setScnt(scnt+1); // scnt 가 0이면 
        setScnt(scnt+1); // 이 scnt도 0이고
        setScnt(scnt+1); // 이 scnt도 0임
        //setDoubleCnt(doubleCnt+(2*cnt));
        console.log(`${cnt}`);
        
    };

    const handleHateClick=()=>{
        console.log(`${title} click`);
        cnt = scnt+hatecnt+1;
        // cnt++;
        
        //setDoubleCnt(doubleCnt+(2*cnt));
        console.log(`${cnt}`);
        setHatecnt(hatecnt+1);
    };

    const handleImg=()=>{
        if (isize == 0) setISize(1) ;
        else setISize(0) ;

    };

    return (
        <div className='min-w-100 w-full h-50 flex flex-row border-solid border-2 border-black'>
            <img src={imgUrl} className={imgSize[isize]} onClick={handleImg}/>
            <div className='h-full '>
                <div className='h-4/5 p-5 flex flex-col justify-between items-start box-border'>
                    <h1 className='font-bold mb-2'>{title}</h1>
                    <p className='lg:text-balance'>{contexts}</p>
                </div>
                <div className='h-1/5 w-full flex flex-row justify-end p-3'>
                    <div className='font-bold h-full cursor-pointer hover:text-fuchsia-800'
                        onClick={handleClick}> 
                        ❤ 좋아요 {scnt}
                    </div>
                    <div className='font-bold h-full cursor-pointer hover:text-fuchsia-800'
                        onClick={handleHateClick}> 
                        ❤ 싫어요 {hatecnt}
                    </div>
                </div>
            </div>
        </div>
    )
}
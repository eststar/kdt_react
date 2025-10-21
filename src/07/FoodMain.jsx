import FoodCard from "./FoodCard"
import FoodData from "./FoodData.json"
import TailButton from "../components/TailButton"

import { useState } from "react";

export default function FoodMain() {
    const [foodFilterData, setFoodDataFilter] = useState(FoodData);
    const [showData, setShowData] = useState(foodFilterData.map((data, idx) => (
                        <FoodCard infoData={data} key={idx} />
                    )));

    const handleAll = () => {
        
        let selShowdata = foodFilterData.map((data, idx) => (<FoodCard infoData={data} key={idx} />));
        setFoodDataFilter(FoodData);        
        // setShowData((item)=> item = selShowdata);
    };

    const showCategory = (item) => {
        
        let selectedCat = FoodData.filter((data) => item === data["운영주체 분류"].replaceAll(" ", ""));
        // let selShowdata = foodFilterData.map((data, idx) => (<FoodCard infoData={data} key={idx} />));
        setFoodDataFilter(selectedCat);
        // setShowData(()=>foodFilterData.map((data, idx) => (<FoodCard infoData={data} key={idx} />)));

        // console.log(item);
        // const catShowData = FoodData.map((data, idx)=>
        //     (item == "전체") ? <FoodCard infoData={data} key={idx} /> 
        //         : categoryArr.includes(data["운영주체 분류"].replaceAll(" ", "")) 
        //             ? <FoodCard infoData={data} key={idx} />: ""
        // );
    };   

    const categoryArr = [...new Set(FoodData.map((item) => item["운영주체 분류"].replaceAll(" ", "")))];
    
    const categoryButtons = categoryArr.map((catItem, idx) =>
        <TailButton bColor="blue" caption={catItem} onHandle={() => showCategory(catItem)} key={idx} />
    );

    return (
        <div className="w-full h-full flex flex-col justify-start items-center p-5">
            <div className="w-full h-full m-2 flex flex-row justify-between items-center gap-2">
                <TailButton bColor="green" caption="전체" onHandle={handleAll} />
                {categoryButtons}</div>
            <div className="w-full h-full grid grid-cols-2 grid-rows-[200px] gap-2 ">
                {/* {showData}                 */}
                {
                    foodFilterData.map((data, idx) => (
                        <FoodCard infoData={data} key={idx} />
                    ))
                }
            </div>

        </div>
    )
}

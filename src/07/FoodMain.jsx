import FoodCard from "./FoodCard"
import FoodData from "./FoodData.json"
import { useState } from "react";

export default function FoodMain() {
    const [tags, setTags] = useState();

    const showData= FoodData.map((data, idx)=>(
            <FoodCard infoData={data} key={idx} />
        ));

    return (
        <div className="p-5"    >
            <div className="m-2"></div>
            <div className="w-full h-full grid grid-cols-2 grid-rows-[200px] gap-2 ">
                {showData}
                {/* <FoodCard infoData={FoodData[0]} />
                <FoodCard infoData={FoodData[0]} />
                <FoodCard infoData={FoodData[0]} /> */}
            </div>

        </div>
    )
}

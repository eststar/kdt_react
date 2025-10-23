import TailButton from "../components/TailButton";

export default function TrafficNav({ title, data, selected}) {
    
    const makeBts = ()=>data.map(el =>
                        <TailButton bColor="blue" caption={el} onHandle={() => selected(el)} key={el}/>);

    return (
        <div className="w-full flex flex-row justify-between items-center mb-5">
            <div>{title}</div>
            <div className="flex flex-row justify-end items-center gap-1">
                {makeBts()}
                {/* {                    
                    (data.map(el =>
                        <TailButton bColor="blue" caption={el} onHandle={() => selected(el)} key={el}/>))
                } */}
            </div>
        </div>
    )
}

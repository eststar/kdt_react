import TailButton from "../components/TailButton";

export default function TrafficNav({ title, data, setSelected, selected}) {
        
    const makeBts = ()=>data.map(item =>
                        <TailButton bColor={(item == selected)? "orange":"blue"} caption={item} onHandle={() => setSelected(item)} key={item}/>);

    return (
        <div className="w-full flex flex-row justify-between items-center mb-5">
            <div className="text-xl font-bold border-2 border-solid border-b-emerald-800 p-2 rounded-2xl">{title}</div>
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

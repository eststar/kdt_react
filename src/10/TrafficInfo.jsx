
const targetData = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];
export default function TrafficInfo({ infoData }) {
    
    return (
        <div className="flex flex-col items-start mb-1 p-1 gap-1 bg-amber-200 border-1 border-b-fuchsia-800">
            <div className="bg-green-300 p-2">
                {infoData["도로종류"]}
            </div >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            {
                targetData.map((item, idx) =>
                    <div className="flex flex-row gap-1" key={idx}>
                        <div  className="bg-blue-300 p-2">{item}</div><div className="p-2">{infoData[item]}</div>                        
                    </div>
                )
            }
            </div>
        </div>
    )
}

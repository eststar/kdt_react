
const borderColor = {
  "green" : "border-green-900",
  "amber" : "border-amber-900",
};

const backColor = {
  "green" : "bg-green-900",
  "amber" : "bg-amber-900",
};
export default function AirCard({ color, airKey, airInfo, airData }) {    
    return (
        <div className={`w-full flex flex-col justify-center border-1 border-solid ${borderColor[color]}`}>
            <div className={`w-full ${backColor[color]} text-white flex flex-col justify-center items-center`}>
                <p>{airInfo.name}</p><p>{`(${airKey})`}</p> 
            </div>
            <div className="w-full font-bold flex justify-center items-center">
                {`${airData}${airInfo.unit}`}
            </div>
        </div>
    )
}

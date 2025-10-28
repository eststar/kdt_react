import Market from "../assets/market/market.png"

export default function TailCard() {
  return (
    <div className="w-full h-full shadow-xl/30">
      <img src={Market} alt="" className="w-full" />
      <div className="w-full mb-10">
        <h2 className="text-lg font-bold">위치</h2>
        <p className="">주소</p>
      </div>
      <div className="flex flex-wrap space-x-2">
        <div className="py-2 px-1 rounded-2xl bg-gray-200">키워드</div>
        <div className="py-2 px-1 rounded-2xl bg-gray-200">키워드</div>
        <div className="py-2 px-1 rounded-2xl bg-gray-200">키워드</div>
      </div>
    </div>
  )
}

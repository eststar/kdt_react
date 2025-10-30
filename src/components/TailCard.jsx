// import Market from "../assets/market/market.png"

export default function TailCard({ data, infos }) {
  // console.log(data.galSearchKeyword.split(","));  

  const keyTags = (data) => {
    if (!data)
      return;
    // const keywordArr = data.galSearchKeyword.split(",");

    return infos.map((el) => <div key={el.replaceAll(" ", "")}
      className="py-1 px-2 rounded-2xl bg-gray-200">{el.trim()}</div>);
  };


  return (
    <div className="max-w-sm shadow-xl/30 flex flex-col">
      <img src={data.galWebImageUrl} alt="" className="w-full" />
      <div className="w-full mb-10 p-5">
        <h2 className="text-lg font-bold">{data.galTitle}</h2>
        <p className="">{data.galPhotographyLocation}</p>
      </div>
      <div className="p-5 flex flex-wrap gap-2">
        {keyTags(data)}
      </div>
    </div>
  )
}

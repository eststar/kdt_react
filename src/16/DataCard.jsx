
export default function DataCard({title, number}) {
    return (
        <div className="w-full rounded-2xl border-2 border-solid border-sky-400 bg-violet-200">
            <div className="w-full flex justify-center items-center">{title}</div>
            <div className="w-full flex justify-center items-center text-2xl font-bold">{number} 개</div>
        </div>
    )
}

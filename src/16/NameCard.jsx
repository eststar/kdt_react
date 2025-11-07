
export default function NameCard({title, num, onhandle}) {
  return (
    <div onClick={onhandle} 
        className="w-full rounded border-2 border-lime-400 border-solid bg-purple-200
        font-bold p-2 ">
      <div>{title}</div>
      <div>{num}</div>
    </div>
  )
}

export default function TailSelect({caption, data, onhandle}) {
    // const keys = Object.keys(data);
    // const values = Object.values(data);
    const makeOptions = data.map((el)=>
            <option key={el} value={el}>{el}</option>
        );
  return (
    <div className="grid-rows-2 border-2 border-solid border-b-cyan-700 rounded">
        <div>{caption}</div>
        <select className="bg-white">
            {makeOptions}
        </select>
    </div>
  )
}

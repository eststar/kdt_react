import { useParams } from "react-router-dom"

export default function RoutePage1() {
  const {itme1, item2} = useParams();
  return (
    <div>
      페이지1<br />
      {itme1}<br />{item2}
    </div>
  )
}

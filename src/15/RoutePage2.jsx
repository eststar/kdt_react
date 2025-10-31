import { useSearchParams } from "react-router-dom"

export default function RoutePage2() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      페이지2
      {searchParams.get("item1")+searchParams.get("item2")}
    </div>
  )
}

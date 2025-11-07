import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className='bg-purple-500 text-white shadow-md'>
            <nav className='container h-20 mx-auto flex justify-between items-center'>
                <div className='text-xl font-bold'>KDT 03</div>
                <ul className='flex space-x-4'>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/">홈</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/lotto">로또</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/Food">푸드마켓</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="BoxOffice">일일 박스오피스</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/Traffic">교통사고 통계</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/TourGallery">관광 사진</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/FestivalGallery">부산 축제 정보</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/FestivalGallery2">부산 축제 정보(Atom)</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/ChargerInfo">전기차 충전소 정보</Link></li>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link to="/JotaiCnt">전역 상태 관리</Link></li>
                </ul>
            </nav>
        </header>
    )
}

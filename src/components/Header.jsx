import React from 'react'

export default function Header() {
    return (
        <header className='bg-purple-500 text-white shadow-md'>
            <nav className='container h-20 mx-auto flex justify-between items-center'>
                <div className='text-xl font-bold'>KDT 03</div>
                <ul className='flex space-x-4'>
                    <li className='hover:text-lg font-bold cursor-pointer'>홈</li>
                    <li className='hover:text-lg font-bold cursor-pointer'>로또</li>
                    <li className='hover:text-lg font-bold cursor-pointer'>푸드마켓</li>
                    <li className='hover:text-lg font-bold cursor-pointer'>일일 박스오피스</li>
                    <li className='hover:text-lg font-bold cursor-pointer'>교통사고 통계</li>
                    <li className='hover:text-lg font-bold cursor-pointer'>관광 사진</li>
                    <li className='hover:text-lg font-bold cursor-pointer'>부산 축제정보</li>
                </ul>
            </nav>
        </header>
    )
}

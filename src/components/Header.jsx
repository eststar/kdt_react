import React from 'react'

export default function Header() {
    return (
        <header className='bg-purple-500 text-white shadow-md'>
            <nav className='container h-20 mx-auto flex justify-between items-center'>
                <div className='text-xl font-bold'>KDT 03</div>
                <ul className='flex space-x-4'>
                    <li className='hover:text-lg font-bold'>홈</li>
                    <li className='hover:text-lg font-bold'>로또</li>
                </ul>
            </nav>
        </header>
    )
}

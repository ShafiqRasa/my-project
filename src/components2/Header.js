import React, {useState} from 'react'


function Header() {
    const [isMExpand, setisMExpand] = useState(false)
    const handleMenu = () => {
        setisMExpand(!isMExpand)
    }
  return (
    <div className='w-full bg-white'>
        <div className='border-2 md:flex md:justify-between md:items-start border-gray-200 shadow-md pt-6 pb-6 md:pb-0 px-8'>
            <div className='flex justify-between md:justify-around items-start'>
                <div>
                    <h1><a href='' className='uppercase text-lg font-bold tracking-wider text-orange-400 md:text-gray-500 md:hover:text-gray-700'>egg</a></h1>
                </div>
                <div className={`md:hidden hover:cursor-pointer ${isMExpand ? 'hidden' : 'block'}`} onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-orange-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className={`md:hidden hover:cursor-pointer ${isMExpand ? 'block' : 'hidden'}`} onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-orange-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <nav className={`hidden md:ml-10 md:block`}>
                    <ul className='md:flex md:justify-end'>
                        <li className='liStyles'><a href='#'>Home</a></li>
                        <li className='liStyles'>
                            <a href='#'>Menu</a>
                            
                        </li>
                        <li className='liStyles'><a href='#'>About</a></li>
                        <li className='liStyles'><a href='#'>Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className='hidden md:inline'>
                <a href='' className='btn2 btnSMD md:hover:bg-green-400 md:hover:text-white md:transition md:ease-out md:duration-500 md:rounded-full md:border-2 md:border-green-400 md:text-green-400'>Sign In</a>
                <a href='' className='btn2 btnSMD md:hover:bg-green-400 md:hover:text-white  md:transition mdLease-out md:duration-500 md:rounded-full md:border-2 md:border-green-400 md:text-green-400'>Sign Up</a>
            </div>
            <nav className={`text-right ${isMExpand ? 'block' : 'hidden'} md:hidden`}>
                <ul className='md:flex md:justify-end'>
                    <li className='liStylesMD flex justify-end'>
                        <a href='#'>Home</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </li>
                    <li className='liStylesMD flex justify-end'>
                        <a href='#'>Menu</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                    </li>
                    <li className='liStylesMD flex justify-end'>
                        <a href='#'>About</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                    </li>
                    <li className='liStylesMD flex justify-end'>
                        <a href='#'>Contact</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                    </li>
                </ul>
            </nav>
        </div>
        
        {/* <div>
            <ul className='bg-green-100'>
                <li>first menu</li>
                <li>second menu</li>
                <li>third menu</li>
            </ul>
        </div> */}
    </div>
  )
}

export default Header
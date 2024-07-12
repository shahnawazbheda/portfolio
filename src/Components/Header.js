
import { FaHome, FaRegUser, FaLaptopCode } from 'react-icons/fa';



export default function Header() {
    
    return (
        <>  
                <nav className="border-gray-200 fixed top-0 w-full z-50 bg-slate-950">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center sm:text-2xl  font-semibold whitespace-nowrap  text-blue-600 bg-white underline underline-offset-8  rounded-xl py-2 p-2">
                                Shahnawaz Bheda
                            </span>
                        </a>

                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden F " aria-controls="navbar-default" aria-expanded="false">
                            <div className="drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label htmlFor="my-drawer-4" className="drawer-button ">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                                        </svg>
                                    </label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-80  min-h-full bg-base-200 text-base-content">
                                        <li>
                                            <a href="/" className="block py-2 px-3 text-black dark:text-white text-2xl ms-10 hover:underline hover:underline-offset-8 rounded md:bg-transparent  md:p-0 flex" aria-current="page"><span className='mt-1'><FaHome /></span> <span className='ms-2'> Home</span></a>

                                        </li>
                                        <li>
                                            <a href="/about" className="block py-2 px-3 text-black dark:text-white text-2xl ms-10 hover:underline hover:underline-offset-8 rounded  md:hover:bg-transparent md:border-0  md:p-0 flex "><span className='mt-1'><FaRegUser /></span> <span className='ms-2'>About</span></a>
                                        </li>
                                        <li>
                                            <a href="/project" className="block py-2 px-3 text-black dark:text-white  text-2xl ms-10 hover:underline hover:underline-offset-8 rounded  md:hover:bg-transparent md:border-0  md:p-0 flex"><span className='mt-1'><FaLaptopCode /></span> <span className='ms-2'>Project</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:text-white ">
                                <li>
                                    <a href="/" className="block py-2 px-3 text-white text-2xl hover:underline hover:underline-offset-8 rounded md:bg-transparent  md:p-0 flex md:hover:text-blue-600" aria-current="page"><span className='mt-1'><FaHome /></span> <span className='ms-2'> Home</span></a>

                                </li>
                                <li>
                                    <a href="/about" className="block py-2 px-3 text-white text-2xl ms-10 hover:underline hover:underline-offset-8 rounded  md:hover:bg-transparent md:border-0  md:p-0 flex md:hover:text-blue-600 "><span className='mt-1'><FaRegUser /></span> <span className='ms-2'>About</span></a>
                                </li>
                                <li>
                                    <a href="/project" className="block py-2 px-3 text-white text-2xl ms-10 hover:underline hover:underline-offset-8 rounded  md:hover:bg-transparent md:border-0  md:p-0 flex md:hover:text-blue-600"><span className='mt-1'><FaLaptopCode /></span> <span className='ms-2'>Project</span></a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </nav>

            
        </>
    )
}

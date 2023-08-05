import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import logo from '~/assets/logo.svg'
import flagVietnamese from '~/assets/flagVietnamese.svg'
import flagEngland from '~/assets/flagEngland.svg'

const HEADER = [
    {
        path: '/',
        title: 'Trang chủ'
    },
    {
        path: '/a',
        title: 'Giới thiệu'
    },
    {
        path: '/b',
        title: 'Tin tức'
    },
    {
        path: '/c',
        title: 'Cơ hội việc làm'
    },
    {
        path: '/d',
        title: 'Liên hệ'
    }
]

function Header() {
    const [openLng, setOpenLng] = useState<boolean>(false)
    const [openNavbar, setOpenNavbar] = useState<boolean>(false)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1280px)'
    })

    return (
        <div className={`fixed top-0 left-0 w-full bg-white shadow-header z-[99] `}>
            <div className={`px-8 w-full h-header flex justify-between items-center`}>
                <div className=''>
                    <img src={logo} alt='' />
                </div>
                {/* nav item */}
                <div className='flex items-center'>
                    {isDesktopOrLaptop && (
                        <>
                            <div className='flex items-center gap-7'>
                                {HEADER.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-2xl not-italic font-bold leading-normal text-default'
                                                : 'text-2xl not-italic font-normal leading-normal'
                                        }
                                        to={item.path}
                                    >
                                        <span>{item.title}</span>
                                    </NavLink>
                                ))}
                            </div>
                            <span className='w-[1px] h-8 border border-solid border-[#9CA3AF] mx-3'></span>
                        </>
                    )}
                    <div className='relative'>
                        <button
                            className='flex justify-between items-center gap-3 text-xl font-normal not-italic w-[70px]'
                            onClick={() => setOpenLng(!openLng)}
                        >
                            <img src={flagVietnamese} alt='' />
                            <span className='uppercase'>vn</span>
                        </button>
                        {openLng && (
                            <div className='absolute left-0 -bottom-8'>
                                <button className='flex justify-between items-center gap-3 text-xl font-normal not-italic w-[70px]'>
                                    <img src={flagEngland} alt='' />
                                    <span className='uppercase'>EN</span>
                                </button>
                            </div>
                        )}
                    </div>
                    {!isDesktopOrLaptop && (
                        <div className='ms-3'>
                            <button
                                className='inline-flex items-center justify-center p-2 text-default rounded-md hover:text-black hover:bg-[#6fa3f980] focus:outline-none'
                                onClick={() => setOpenNavbar(!openNavbar)}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                    className='block p-1 border border-solid rounded-sm w-9 h-9 text-primary border-primary'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {openNavbar && !isDesktopOrLaptop && (
                <div className='pt-2 px-2 pb-3 bg-white '>
                    {HEADER.map((item, index) => (
                        <NavLink
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? 'flex items-center justify-start text-default'
                                    : 'flex items-center justify-start hover:bg-[#374151] hover:text-white rounded-md'
                            }
                            to={item.path}
                        >
                            <div className='block text-sm font-semibold w-full xl:text-lg px-3 py-2 uppercase '>
                                {item.title}
                            </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    )
}

// flex items-center justify-start

export default Header
/* eslint-disable import/no-unresolved */
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

import logo from '~/assets/svg/logo.svg'

import { LANGUAGE } from '~/i18n/i18n'
import LazyImage from '~/component/customs/LazyImage'

function Header() {
    const [openLng, setOpenLng] = useState<boolean>(false)
    const [openNavbar, setOpenNavbar] = useState<boolean>(false)
    const { t, i18n } = useTranslation<string[]>(['layout'])
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1280px)'
    })
    console.log(openNavbar)
    const handleChangeLanguage = () => {
        setOpenLng(false)
        i18n.changeLanguage(lng.name)
    }

    const HEADER: { path: string; title: string }[] = t('header', { returnObjects: true })
    const lngActive = i18n.language === LANGUAGE[0].name ? LANGUAGE[0] : LANGUAGE[1]
    const lng = i18n.language === LANGUAGE[0].name ? LANGUAGE[1] : LANGUAGE[0]

    const refLanguage = useRef(null)

    return (
        <div className={`fixed top-0 left-0 right-0 bg-white shadow-header overflow-hidden z-[99] `}>
            <div className={`md:px-8 px-1 w-full h-header flex justify-between items-center`}>
                <Link to='/' className='max-w-[150px] max-h-[50px]'>
                    <LazyImage src={logo} />
                </Link>
                {/* nav item */}

                <div className='flex items-center'>
                    {isDesktopOrLaptop && (
                        <>
                            <div className='flex items-center gap-7'>
                                {HEADER.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        className={({ isActive }) => (isActive ? ' text-default ' : 'border-[#9CA3AF]')}
                                        to={item.path}
                                        onClick={() => setOpenNavbar(false)}
                                    >
                                        <span className='px-1 text-2xl not-italic leading-normal'>{item.title}</span>
                                    </NavLink>
                                ))}
                            </div>
                            <span className='w-[1px] h-8 border border-solid mx-3'></span>
                        </>
                    )}
                    <div className='relative'>
                        <button
                            className='flex justify-between items-center gap-3 text-xl font-normal not-italic w-[70px]'
                            onClick={() => setOpenLng(!openLng)}
                        >
                            <img src={lngActive.img} alt='' />
                            <span className='uppercase'>{lngActive.name}</span>
                        </button>
                        {openLng && (
                            <div className='absolute left-0 -bottom-8' ref={refLanguage}>
                                <button
                                    className='flex justify-between items-center gap-1 text-xl font-normal not-italic w-[70px]'
                                    onClick={handleChangeLanguage}
                                >
                                    <div className='max-w-[30px]'>
                                        <LazyImage src={lng.img} />
                                    </div>
                                    <span className='uppercase'>{lng.name}</span>
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

export default Header

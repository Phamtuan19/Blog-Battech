/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import LazyImage from '../customs/LazyImage'

import facebook from './assets/svg/facebook.svg'
import discord from './assets/svg/discord.svg'
import linkedin from './assets/svg/linkedin.svg'
import { useMediaQuery } from 'react-responsive'

interface TypeDefaultLayout {
    isContact?: boolean
    children?: React.ReactElement
}

function DefaultLayout(props: TypeDefaultLayout) {
    const { isContact, children } = props

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1280px)'
    })

    return (
        <>
            <div className='relative'>
                <Header />
                <div className='relative mt-header '>{<Outlet /> || children}</div>
                <Footer />
            </div>
            {isDesktopOrLaptop && (
                <div className='fixed left-10 bottom-32 z-50'>
                    <div className='flex flex-col gap-y-5'>
                        <div className='w-10 h-10 rounded-full flex items-center justify-center border border-solid border-white bg-default'>
                            <div className='w-[10px] h-4 flex items-center justify-center'>
                                <LazyImage src={facebook} />
                            </div>
                        </div>
                        <div className='w-10 h-10 rounded-full flex items-center justify-center border border-solid border-white bg-default'>
                            <div className='flex items-center justify-center'>
                                <LazyImage src={discord} />
                            </div>
                        </div>
                        <div className='w-10 h-10 rounded-full flex items-center justify-center border border-solid border-white bg-default'>
                            <div className='flex items-center justify-center'>
                                <LazyImage src={linkedin} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DefaultLayout

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

interface TypeDefaultLayout {
    children?: React.ReactElement
}

function DefaultLayout(props: TypeDefaultLayout) {
    const { children } = props

    return (
        <>
            <div className='relative'>
                <Header />
                <div className='relative mt-header '>{<Outlet /> || children}</div>
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout

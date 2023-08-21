/* eslint-disable import/no-unresolved */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'

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

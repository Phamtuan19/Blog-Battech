import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

interface TypeDefaultLayout {
    children: React.ReactElement
}

function DefaultLayout(props: TypeDefaultLayout) {
    const { children } = props

    return (
        <div className=''>
            <Header />
            <div className='relative bg-vector16 bg-no-repeat' style={{ backgroundPosition: '100% 850px' }}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout

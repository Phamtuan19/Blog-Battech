/* eslint-disable react-refresh/only-export-components */
import React from 'react'
// eslint-disable-next-line import/no-unresolved
import LazyImage from '../LazyImage'
import { motion } from 'framer-motion'

interface TypeBanner {
    img: string
    title: string
    title2?: string
    content?: string
    description: string
    sx?: string
    pb: string
    sxItem?: string
    children?: React.ReactElement
}

function Banner(props: TypeBanner) {
    const { img, title, content, description, sx, pb, sxItem, children } = props

    return (
        <div className={`relative w-full flex flex-col justify-end ${sx} overflow-hidden`}>
            <p className={`${pb}`}></p>
            <motion.div
                className='absolute -top-5 right-0'
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <LazyImage src={img} />
            </motion.div>

            <motion.div
                className={`lg:absolute lg:left-0 top-0 w-full h-full lg:mt-0`}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`xl:container lg:mx-auto p-4 w-full h-full flex items-center  ${sxItem || ''}`}>
                    <div className='lg:flex-1 w-full'>
                        <div className='lg:text-start text-center'>
                            <h2
                                className='text-3xl font-bold not-italic leading-normal text-default lg:mb-7 mb-3 uppercase'
                                dangerouslySetInnerHTML={{ __html: title }}
                            ></h2>
                            <p className='lg:text-2xl text-lg leading-7 font-bold not-italic text-default mb-3 uppercase'>
                                {content}
                            </p>
                            <p className='text-base not-italic font-medium leading-6 text-start'>{description}</p>
                        </div>
                        {children}
                    </div>
                    <div className='flex-1'></div>
                </div>
            </motion.div>
        </div>
    )
}

export default React.memo(Banner)

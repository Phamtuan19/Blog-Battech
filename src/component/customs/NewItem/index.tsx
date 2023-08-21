/* eslint-disable import/no-unresolved */
/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom'

import userBlue from '~/assets/svg/userBlue.svg'
import calendar from '~/assets/svg/calendar-2.svg'
import React from 'react'
import LazyImage from '../LazyImage'

export interface TypeNewItem {
    _id: string
    img: string
    useName: string
    date: string
    title: string
    description?: string
}

function NewItem(props: TypeNewItem) {
    const { _id, img, useName, date, title, description } = props

    return (
        <div className='text-center bg-white shadow-baseShadow rounded-xl overflow-hidden '>
            <div className='relative rounded-t-lg overflow-hidden'>
                <p className='pb-[60%]'></p>
                <div className='absolute top-0 left-0 w-full h-full object-cover'>
                    <LazyImage src={img} />
                </div>
            </div>
            <div className='p-4 flex flex-col'>
                <div className=' mt-2 mb-2 flex items-center justify-between'>
                    <div className='flex-1 flex items-center'>
                        <div className=''>
                            <LazyImage src={userBlue} />
                        </div>
                        <p className='text-sm not-italic ms-2'>{useName}</p>
                    </div>
                    <div className='flex-1 flex items-center justify-end text-[#929292]'>
                        <div className=''>
                            <LazyImage src={calendar} />
                        </div>
                        <p className='text-sm not-italic ms-2'>{date.toString().slice(0, 10)}</p>
                    </div>
                </div>
                <div className='min-h-[64px]'>
                    <Link
                        to={`/news/${_id}`}
                        className='flex lg:text-xl text-lg font-bold not-italic mt-2 text-start hover:text-default'
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                    >
                        {title}
                    </Link>
                </div>
                {description && (
                    <div
                        className='h-[72px] flex text-base font-medium leading-6 not-italic text-start mt-2 text-[#929292]'
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                    >
                        {description}
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(NewItem)

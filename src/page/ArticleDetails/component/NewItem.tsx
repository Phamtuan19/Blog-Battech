/* eslint-disable import/no-unresolved */

import userBlue from '~/assets/svg/userBlue.svg'
import calendar from '~/assets/svg/calendar-2.svg'
import { Link } from 'react-router-dom'
import { PostType } from '~/types/post.type'

function NewItem(props: PostType) {
    const { _id, image, title, createdAt, description } = props
    return (
        <div className='grid grid-cols-3 gap-x-4 bg-white rounded-xl shadow-baseShadow overflow-hidden'>
            <div className='relative'>
                <div className=''>
                    <p className='sm:pb-[60%] pb-[100%]'></p>
                    <img
                        className=' absolute top-0 left-0 w-full h-full min-w-[100px] min-h-[100px] object-cover'
                        src={image}
                        alt=''
                    />
                </div>
            </div>
            <div className='col-span-2 py-3 pe-3'>
                <div className='flex flex-col justify-between h-full'>
                    <Link
                        to={`/news/${_id}`}
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                        className='hover:text-default font-bold'
                    >
                        {title}
                    </Link>
                    <div className='mb-3 xl:hidden md:block hidden'>
                        <p
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}
                        >
                            {description}
                        </p>
                    </div>
                    <div className='lg:mt-5 flex items-center justify-between'>
                        <div className=' flex items-center'>
                            <img src={userBlue} alt='' />
                            <p className='text-sm not-italic ms-2'>Le link</p>
                        </div>
                        <div className=' flex items-center text-[#929292]'>
                            <img src={calendar} alt='' />
                            <p className='text-sm not-italic ms-2'>{createdAt.toString().slice(0, 10)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewItem

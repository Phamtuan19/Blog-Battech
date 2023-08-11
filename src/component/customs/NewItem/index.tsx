import { Link } from 'react-router-dom'

import userBlue from '~/assets/svg/userBlue.svg'
import calendar from '~/assets/svg/calendar-2.svg'

export interface TypeNewItem {
    _id: string
    img: string
    useName: string
    date: string
    title: string
    description?: string
}

// .toString().slice(0, 10)

function NewItem(props: TypeNewItem) {
    const { _id, img, useName, date, title, description } = props

    return (
        <div className='text-center bg-white shadow-baseShadow rounded-xl overflow-hidden '>
            <div className='relative rounded-t-lg overflow-hidden'>
                <p className='pb-[60%]'></p>
                <img className='absolute top-0 left-0 w-full h-full object-cover' src={img} alt='' />
            </div>
            <div className='p-4 flex flex-col'>
                <div className=' mt-2 mb-2 flex items-center justify-between'>
                    <div className='flex-1 flex items-center'>
                        <img src={userBlue} alt='' />
                        <p className='text-sm not-italic ms-2'>{useName}</p>
                    </div>
                    <div className='flex-1 flex items-center justify-end text-[#929292]'>
                        <img src={calendar} alt='' />
                        <p className='text-sm not-italic ms-2'>{date}</p>
                    </div>
                </div>
                <Link
                    to={`/article/${_id}`}
                    className='flex lg:text-xl text-lg font-bold not-italic mt-2 text-start'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {title}
                </Link>

                <div
                    className='flex text-base font-medium leading-6 not-italic text-start mt-2 text-[#929292]'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {description}
                </div>
            </div>
        </div>
    )
}

export default NewItem

import { Link } from 'react-router-dom'

import userBlue from '~/assets/svg/userBlue.svg'
import calendar from '~/assets/svg/calendar-2.svg'

interface TypeNewItem {
    img: string
    useName: string
    date: string
    title: string
    content?: string
}

function NewItem(props: TypeNewItem) {
    const { img, useName, date, title, content } = props

    return (
        <div className="className=' text-center bg-white shadow-baseShadow rounded-xl overflow-hidden'">
            <div className='relative rounded-t-lg overflow-hidden'>
                <p className='pb-[60%]'></p>
                <img className='absolute top-0 left-0 w-full h-full object-cover' src={img} alt='' />
            </div>
            <div className='p-4'>
                <div className='mt-2 mb-2 flex items-center justify-between'>
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
                    to=''
                    className='lg:text-xl text-lg font-bold not-italic mt-2 text-justify'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {title}
                </Link>
                {content && (
                    <p
                        className='text-base font-medium leading-6 not-italic text-justify mt-2 text-[#929292]'
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                    >
                        {content}
                    </p>
                )}
            </div>
        </div>
    )
}

export default NewItem

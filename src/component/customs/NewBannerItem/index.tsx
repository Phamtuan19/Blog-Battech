import user from '~/assets/svg/user.svg'
import calendar from '~/assets/svg/calendar.svg'
import { Link } from 'react-router-dom'
import Button from '../Button'

interface TypeNewsItems {
    img: string
    content: string
    useName: string
    date: string
    btnName: string
}

function NewBannerItem(props: TypeNewsItems) {
    const { img, content, useName, date, btnName } = props

    return (
        <div
            className='relative rounded-xl w-full h-full'
            style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${img})`,
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'lightgray'
            }}
        >
            <p className='xl:pb-[50%] md:pb-[40%] sm:pb-[50%] pb-[100%]'></p>
            <div className='absolute left-0 bottom-0 w-full h-full py-2 px-4 flex flex-col justify-end'>
                <div className=''>
                    <Button sx='up mb-3' background='#FD4848' hover='#7F1D1D'>
                        <Link to='' className='text-white lg:text-xl text-lg text-center not-italic font-bold'>
                            {btnName}
                        </Link>
                    </Button>
                </div>
                <Link
                    to=''
                    className='lg:text-2xl text-xl leading-7 font-bold not-italic text-white hover:underline hover:decoration-1'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {content}
                </Link>
                <div className='mt-2 flex items-center gap-10'>
                    <div className='flex items-center text-white'>
                        <img src={user} alt='' width={14} height={16} />
                        <p className='text-sm not-italic ms-2'>{useName}</p>
                    </div>
                    <div className='flex items-center text-white'>
                        <img src={calendar} alt='' />
                        <p className='text-sm not-italic ms-2'>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewBannerItem

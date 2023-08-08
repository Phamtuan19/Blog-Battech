import user from '~/assets/svg/user.svg'
import calendar from '~/assets/svg/calendar.svg'

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
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'lightgray'
            }}
        >
            <p className='pb-[40%]'></p>
            <div className='absolute left-0 bottom-6 right-0 px-4'>
                <button className='py-[6px] px-3 text-center rounded-lg bg-[#FD4848] mb-3'>
                    <span className='text-white lg:text-xl text-lg text-center not-italic font-bold'>{btnName}</span>
                </button>
                <p
                    className='lg:text-2xl text-xl leading-7 font-bold not-italic text-white'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {content}
                </p>
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

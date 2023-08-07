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
            <div className='w-full h-[185px] rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={img} alt='' />
            </div>
            <div className='p-4'>
                <div className='mt-2 mb-2 flex items-center gap-10'>
                    <div className='flex-1 flex items-center'>
                        <UserBlue />
                        <p className='text-sm not-italic ms-2'>{useName}</p>
                    </div>
                    <div className='flex-1 flex items-center text-[#929292]'>
                        <Calendar />
                        <p className='text-sm not-italic ms-2'>{date}</p>
                    </div>
                </div>
                <p
                    className='lg:text-xl text-lg font-bold not-italic mt-2 text-start'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {title}
                </p>
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

const UserBlue = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 14 16' fill='none'>
            <path
                d='M7 8C9.1875 8 11 6.21875 11 4C11 1.8125 9.1875 0 7 0C4.78125 0 3 1.8125 3 4C3 6.21875 4.78125 8 7 8ZM9.78125 9H9.25C8.5625 9.34375 7.8125 9.5 7 9.5C6.1875 9.5 5.40625 9.34375 4.71875 9H4.1875C1.875 9 0 10.9062 0 13.2188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.2188C14 10.9062 12.0938 9 9.78125 9Z'
                fill='#008345'
            />
        </svg>
    )
}
const Calendar = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='15' height='16' viewBox='0 0 15 16' fill='none'>
            <path
                d='M0.944824 14.5C0.944824 15.3438 1.60107 16 2.44482 16H13.4448C14.2573 16 14.9448 15.3438 14.9448 14.5V6H0.944824V14.5ZM10.9448 8.375C10.9448 8.1875 11.101 8 11.3198 8H12.5698C12.7573 8 12.9448 8.1875 12.9448 8.375V9.625C12.9448 9.84375 12.7573 10 12.5698 10H11.3198C11.101 10 10.9448 9.84375 10.9448 9.625V8.375ZM10.9448 12.375C10.9448 12.1875 11.101 12 11.3198 12H12.5698C12.7573 12 12.9448 12.1875 12.9448 12.375V13.625C12.9448 13.8438 12.7573 14 12.5698 14H11.3198C11.101 14 10.9448 13.8438 10.9448 13.625V12.375ZM6.94482 8.375C6.94482 8.1875 7.10107 8 7.31982 8H8.56982C8.75732 8 8.94482 8.1875 8.94482 8.375V9.625C8.94482 9.84375 8.75732 10 8.56982 10H7.31982C7.10107 10 6.94482 9.84375 6.94482 9.625V8.375ZM6.94482 12.375C6.94482 12.1875 7.10107 12 7.31982 12H8.56982C8.75732 12 8.94482 12.1875 8.94482 12.375V13.625C8.94482 13.8438 8.75732 14 8.56982 14H7.31982C7.10107 14 6.94482 13.8438 6.94482 13.625V12.375ZM2.94482 8.375C2.94482 8.1875 3.10107 8 3.31982 8H4.56982C4.75732 8 4.94482 8.1875 4.94482 8.375V9.625C4.94482 9.84375 4.75732 10 4.56982 10H3.31982C3.10107 10 2.94482 9.84375 2.94482 9.625V8.375ZM2.94482 12.375C2.94482 12.1875 3.10107 12 3.31982 12H4.56982C4.75732 12 4.94482 12.1875 4.94482 12.375V13.625C4.94482 13.8438 4.75732 14 4.56982 14H3.31982C3.10107 14 2.94482 13.8438 2.94482 13.625V12.375ZM13.4448 2H11.9448V0.5C11.9448 0.25 11.6948 0 11.4448 0H10.4448C10.1636 0 9.94482 0.25 9.94482 0.5V2H5.94482V0.5C5.94482 0.25 5.69482 0 5.44482 0H4.44482C4.16357 0 3.94482 0.25 3.94482 0.5V2H2.44482C1.60107 2 0.944824 2.6875 0.944824 3.5V5H14.9448V3.5C14.9448 2.6875 14.2573 2 13.4448 2Z'
                fill='#929292'
            />
        </svg>
    )
}

export default NewItem

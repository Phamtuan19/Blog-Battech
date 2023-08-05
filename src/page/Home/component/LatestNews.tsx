// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'

// import required modules
import { Autoplay, Pagination, Grid } from 'swiper/modules'

import user from '~/assets/user.svg'
import calendar from '~/assets/calendar.svg'

import './style.css'

function LatestNews() {
    return (
        <div>
            <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-2'>TIN TỨC</h3>
            <div className=''>
                <h6 className='text-xl font-bold not-italic text-[#444444]'>Tin tức mới</h6>
                <div className='grid grid-cols-12 lg:gap-8 gap-3'>
                    <div className='lg:col-span-8 col-span-12'>
                        <div
                            className='relative h-[358px] rounded-xl'
                            style={{
                                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(https://s3-alpha-sig.figma.com/img/77ef/c6b7/08345b0e32542e2ae3678931f63d980d?Expires=1691971200&Signature=H6dMTWS8h6LjxMT7ZCQzEnzsbDOk2r1AzAAjlL6iEGdFw5Rypebk9k7Hau1kazwwAkauW7MuhGBypRs1prag9ea6Wm49zwSNmL7qa286KrpOafHACXb1W7CJDIUwfR6tB6~39VrkI0X7klpiCsBPH50s8Ts3YfjCGGqxcK49t3ZT1JTvP-LkSiyYGS8VMY6EYj9s0WFfmIlozxAmJmtMMWyAAG11lPcyC8SnKJLSLA-OCIrjr7QLmegskr75WFySfn1jPKHttX9UhOlZ~edsCyxiWKwuhW7qly9E3p78oVw1iI83VCgXSPrqTftijCuBkL8h761G~P10ypptRYHstg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'lightgray'
                            }}
                        >
                            <div className='absolute left-0 bottom-6 right-0 px-4'>
                                <button className='py-[6px] px-3 text-center rounded-lg bg-[#FD4848] mb-3'>
                                    <span className='text-white lg:text-xl text-lg text-center not-italic font-bold'>
                                        Phát triển phần mềm
                                    </span>
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
                                    Chuyển đổi số ngành sản xuất: Làm thế nào để doanh nghiệp tối ưu lợi thế trong thị
                                    trường siêu cạnh tranh?
                                </p>
                                <div className='mt-2 flex items-center gap-10'>
                                    <div className='flex items-center text-white'>
                                        <img src={user} alt='' width={14} height={16} />
                                        <p className='text-sm not-italic ms-2'>Le Link</p>
                                    </div>
                                    <div className='flex items-center text-white'>
                                        <img src={calendar} alt='' />
                                        <p className='text-sm not-italic ms-2'>May 4th 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <div
                            className='relative h-[358px] rounded-xl'
                            style={{
                                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(https://s3-alpha-sig.figma.com/img/7ce7/2014/ba2ca0ab1c516b94cf15cb79d78d5b40?Expires=1691971200&Signature=EI0G2YKt-tyhjVWfwqk1jBzW9MYPZzyysYBOKp70YtQy1i3WVQ1i7E0nt-8u8S8Q2lpt6z3Z6VRRffe3szcRSwT9XF2nKbUHjkPQjsRc~o0mTwxQuDy2th1W03JDyJ1grxT~AZAJH3hc8JButpUtPz3kmZUczp6q9-ccgeTIsAo-5XvnX6OejIxh2WrHCD2aD3ehTmqomfhko3zv8exuQ7Rjjxzh92MuCr70giMLvTFJUFbDbnvIn6fVxl5YTEFSg9BhgVTA6hK2W3GGdOsh5-ZCjtAuvQ9ZlM6iGCrqzEsyEurJ8mE3X~jSJFcZ7tIiSUuNWIOEXn5uX0gAaV2dJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'lightgray'
                            }}
                        >
                            <div className='absolute left-0 bottom-6 right-0 px-4'>
                                <button className='py-[6px] px-3 text-center rounded-lg bg-[#FD4848] mb-3'>
                                    <span className='text-white lg:text-xl text-lg text-center not-italic font-bold'>
                                        Phát triển phần mềm
                                    </span>
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
                                    Blockchain là gì? Hoạt động và ứng dụng của Blockchain
                                </p>
                                <div className='mt-2 flex items-center gap-10'>
                                    <div className='flex items-center text-white'>
                                        <img src={user} alt='' width={14} height={16} />
                                        <p className='text-sm not-italic ms-2'>Le Link</p>
                                    </div>
                                    <div className='flex items-center text-white'>
                                        <img src={calendar} alt='' width={14} height={16} />
                                        <p className='text-sm not-italic ms-2'>May 4th 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <h6 className='text-xl font-bold not-italic text-[#444444]'>Tin tức và sự kiện</h6>
                    <div className='mt-4 '>
                        <Swiper
                            breakpoints={breakpoints}
                            spaceBetween={30}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            modules={[Autoplay, Pagination, Grid]}
                            className='relative w-full h-full bg-white pb-10 '
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                <SwiperSlide
                                    key={item}
                                    className=' text-center bg-white shadow-baseShadow flex justify-center items-center rounded-xl overflow-hidden'
                                >
                                    <div className='w-full'>
                                        <img
                                            className='w-full h-[185px] object-cover'
                                            src='https://s3-alpha-sig.figma.com/img/3f80/fc26/161247dffd6b96d2471005e5ed9021fa?Expires=1691971200&Signature=RmxRQVI6NLwnFh~dIEtFPrz75GQUBVrkBoZVMJoQjW6ZCA7YDiSkZowfEpPNzquPYZTpm571thuKJ10qVORwYpRXf3QK65umu1hOV2eB~nG4nR~ETkdBLH1t5OOPIodS7iRTk~hF7vb2O3q91OnSSckAFnUWMKxDcq97IdVf-Ja~FKBRGNGxL-eFxgkrdHWoN3-ZuGHiIUNRjTzZAWZgsFHlg7DcxTudKxNMNClbGVabZfWO-Coyy~ISBQEiyKMnuW7INye8peUsu2HNB5lVdbBLxp67weTNp2WmCCE8bILMphaTCshx9naBCr9xQtLsIqgQVtDXhpwy6fUF7KvJQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                            alt=''
                                        />
                                        <div className='p-4'>
                                            <div className='mt-2 flex items-center gap-10'>
                                                <div className='flex-1 flex items-center'>
                                                    <UserBlue />
                                                    <p className='text-sm not-italic ms-2'>Le Link</p>
                                                </div>
                                                <div className='flex-1 flex items-center text-[#929292]'>
                                                    <Calendar />
                                                    <p className='text-sm not-italic ms-2'>May 4th 2023</p>
                                                </div>
                                            </div>
                                            <p
                                                className='lg:text-xl text-lg font-bold not-italic mt-2 text-start'
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                Chuyển đổi số ngành truyền thông đại chúng: xu hướng mới trong lĩnh vực
                                                công nghệ số
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

const breakpoints = {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    // when window width is >= 480px
    550: {
        slidesPerView: 2,
        spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
        slidesPerView: 3,
        spaceBetween: 40
    }
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

export default LatestNews

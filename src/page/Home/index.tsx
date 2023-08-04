// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

import banner from '~/assets/bannerHome.svg'
import clock from '~/assets/clock.svg'
import development from '~/assets/development.svg'
import padlock from '~/assets/padlock.svg'
import amico from '~/assets/amico.svg'
import secureShield from '~/assets/secureShield.svg'
import Banner from '~/component/customs'
import LatestNews from './component/LatestNews'
import RegisterInformation from './component/RegisterInformation'

const DATABANNER = {
    img: banner,
    title: 'BATTECH ERP',
    content: 'GIẢI PHÁP QUẢN TRỊ NGUỒN LỰC DOANH NGHIỆP',
    description:
        'Hỗ trợ Ban lãnh đạo hoạch định và điều hành toàn bộ nguồn lực của doanh nghiệp bao gồm Hàng hóa - Tài chính - Nhân sự - Truyền thông và kết nối các bộ phận thao tác nghiệp vụ hiệu quả thông qua những quy trình được thiết kế theo quy chuẩn quốc tế.',
    btnName: 'Đăng ký nhận tư vấn'
}

const list2 = [
    {
        title: {
            item1: 'Tư duy phát triển',
            item2: 'sản phẩm'
        },
        content:
            'Tạo ra môi trường làm việc trực tuyến cho doanh nghiệp. Tất cả thành viên đều được cung cấp đầy đủ công cụ và tài nguyên số để phục vụ cho công việc.'
    },
    {
        title: {
            item1: 'Tư duy phát triển',
            item2: 'sản phẩm'
        },
        content:
            'Tạo ra môi trường làm việc trực tuyến cho doanh nghiệp. Tất cả thành viên đều được cung cấp đầy đủ công cụ và tài nguyên số để phục vụ cho công việc.'
    },
    {
        title: {
            item1: 'Tư duy phát triển',
            item2: 'sản phẩm'
        },
        content:
            'Tạo ra môi trường làm việc trực tuyến cho doanh nghiệp. Tất cả thành viên đều được cung cấp đầy đủ công cụ và tài nguyên số để phục vụ cho công việc.'
    },
    {
        title: {
            item1: 'Tư duy phát triển',
            item2: 'sản phẩm'
        },
        content:
            'Tạo ra môi trường làm việc trực tuyến cho doanh nghiệp. Tất cả thành viên đều được cung cấp đầy đủ công cụ và tài nguyên số để phục vụ cho công việc.'
    }
]

function Home() {
    return (
        <div className='xl:mt-[40px] mt-[100px]'>
            <Banner {...DATABANNER} />

            <div className='container mx-auto'>
                <div className='flex flex-col gap-36'>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-6'>
                            <img src={amico} alt='' />
                        </div>
                        <div className='col-span-6'>
                            <h3 className='text-2xl left-7 font-bold not-italic text-default mb-6'>
                                GIỚI THIỆU VỀ BATTECH
                            </h3>
                            <p className='text-base not-italic font-medium leading-6 mb-6'>
                                Với gần 15 năm kinh nghiệm, Công ty cổ phần Quốc tế BATTECH là nhà cung cấp các giải
                                pháp quản trị nguồn lực doanh nghiệp chuyên nghiệp. Hỗ trợ Ban lãnh đạo hoạch định và
                                điều hành toàn bộ nguồn lực của doanh nghiệp bao gồm Hàng hóa - Tài chính - Nhân sự -
                                Truyền thông và kết nối các bộ phận thao tác nghiệp vụ hiệu quả thông qua những quy
                                trình được thiết kế theo quy chuẩn quốc tế.
                            </p>
                            <div className='flex gap-5 '>
                                <div className='flex-1 flex items-center flex-col shadow-baseShadow bg-white pt-[19px] pb-[7px] rounded-xl'>
                                    <img src={clock} alt='' width='40' height='40' />
                                    <p className='mt-3 h-[64px] text-base font-semibold not-italic leading-6 text-center'>
                                        Phản hồi <br /> nhanh
                                    </p>
                                </div>
                                <div className='flex-1 flex items-center flex-col shadow-baseShadow bg-white pt-[19px] pb-[7px] rounded-xl'>
                                    <img src={development} alt='' width='40' height='40' />
                                    <p className='mt-3 h-[64px] text-base font-semibold not-italic leading-6 text-center'>
                                        Phản hồi <br /> nhanh
                                    </p>
                                </div>
                                <div className='flex-1 flex items-center flex-col shadow-baseShadow bg-white pt-[19px] pb-[7px] rounded-xl'>
                                    <img src={padlock} alt='' width='40' height='40' />
                                    <p className='mt-3 h-[64px] text-base font-semibold not-italic leading-6 text-center'>
                                        Phản hồi <br /> nhanh
                                    </p>
                                </div>
                                <div className='flex-1 flex items-center flex-col shadow-baseShadow bg-white pt-[19px] pb-[7px] rounded-xl'>
                                    <img src={secureShield} alt='' width='40' height='40' />
                                    <p className='mt-3 h-[64px] text-base font-semibold not-italic leading-6 text-center'>
                                        Phản hồi <br /> nhanh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-[76px] '>
                            <span className='text-orange'>KHÁC BIỆT</span> VÀ TIÊN PHONG
                        </h3>
                        <div className='grid grid-cols-12 gap-8'>
                            {list2.map((item, index) => (
                                <div className='col-span-3' key={index}>
                                    <div className='relative pt-11 px-3 pb-4 bg-white shadow-baseShadow rounded-2xl'>
                                        <h5 className='text-xl leading-6 font-bold text-center mb-3'>
                                            <span className='block'>{item.title.item1}</span>
                                            <span className='block'>{item.title.item2}</span>
                                        </h5>
                                        <div className='text-base not-italic font-medium text-center'>
                                            {item.content}
                                        </div>
                                        <div className='absolute top-3 left-6 -translate-y-1/2'>
                                            <span className='text-[64px] leading-6 text-default font-bold not-italic '>
                                                {`0${index}`}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Latest News */}
                    <LatestNews />
                </div>
            </div>
            {/* Form res */}
            <RegisterInformation />
            <div className='container mx-auto'>
                <div className='my-36'>
                    <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-7'>ĐỐI TÁC</h3>
                    <div className='mt-4 '>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            modules={[Autoplay, Pagination]}
                            className='relative w-full h-full bg-white pb-10 '
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                <SwiperSlide
                                    key={item}
                                    className=' text-center bg-white shadow-baseShadow flex justify-center items-center rounded-xl overflow-hidden'
                                >
                                    <div className='w-full flex justify-center items-center'>
                                        <img
                                            className='w-[150px] h-[105px] object-contain'
                                            src='https://s3-alpha-sig.figma.com/img/4023/7df1/6d6824988f3acabf6831d1c20b16a84e?Expires=1691971200&Signature=aS1XmAzeAFx1zkeCrNh-14fsFzilLjQ24I81cyxO~Z8LnXsWokDt0~xNhyCzckjfYC6AkhCgfgJ-yfFTWLfC-A~0MBS5ASKNalu8lB5zx3x0Pl3RHb-5RMdQTA2g0AwdfHRNCFkOWVOeuBqNMa9rxCuPMzrNV4FBXu5P~OE0QOr4-yZKN2LxyG78KKGj5wb165m6PAF2~LXaYn0RKpkBz0b2tKQZHiT3EbFsqB17dk6bO2PrM--SEOs-9N4tuXFdBLgkXZnK~jNn4-BFFDe94s5jo4zXk5u8KilEV0FzrhxD-JQaX2utCnGOyHvCyUvTqDXg3pA6jGYaZYJAhkupKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                            alt=''
                                        />
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

export default Home

import banner from '~/assets/svg/bannerHome.svg'
import clock from '~/assets/svg/clock.svg'
import development from '~/assets/svg/development.svg'
import padlock from '~/assets/svg/padlock.svg'
import amico from '~/assets/svg/amico.svg'
import Banner from '~/component/customs/banner'
import LatestNews from './component/LatestNews'
import RegisterInformation from '~/component/customs/RegisterInformation'
import Partner from '~/component/customs/Partner'

const DATABANNER = {
    img: banner,
    title: 'BATTECH ERP',
    content: 'GIẢI PHÁP QUẢN TRỊ NGUỒN LỰC DOANH NGHIỆP',
    description:
        'Hỗ trợ Ban lãnh đạo hoạch định và điều hành toàn bộ nguồn lực của doanh nghiệp bao gồm Hàng hóa - Tài chính - Nhân sự - Truyền thông và kết nối các bộ phận thao tác nghiệp vụ hiệu quả thông qua những quy trình được thiết kế theo quy chuẩn quốc tế.'
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

const INTRODUCTION = [
    {
        img: clock,
        title: 'Phản hồi',
        title2: 'nhanh'
    },
    {
        img: development,
        title: 'Hệ thống',
        title2: 'phát triển'
    },
    {
        img: padlock,
        title: 'bảo mật',
        title2: 'thông tin'
    },
    {
        img: padlock,
        title: 'Tự động',
        title2: 'hóa'
    }
]

function Home() {
    return (
        <div
            className=' lg:mt-[40px] mt-[100px] lg:bg-vector16 lg:bg-no-repeat flex flex-col gap-24'
            style={{ backgroundPosition: '100% 850px', backgroundSize: '847px 1113px' }}
        >
            <Banner {...DATABANNER}>
                <button className='bg-default rounded-lg text-white px-6 py-[10px]'>
                    <span
                        className='text-2xl font-bold not-italic'
                        style={{ textShadow: '4px 2px 15px rgba(0, 0, 0, 0.05)' }}
                    >
                        Đăng ký nhận tư vấn
                    </span>
                </button>
            </Banner>

            <div className='xl:container w-full px-[1rem] mx-auto lg:mt-0 mt-10'>
                <div className='flex flex-col lg:gap-36 gap-20'>
                    <div className='grid grid-cols-12 lg:gap-8 gap-y-10'>
                        <div className='lg:col-span-5 col-span-full '>
                            <div className='flex justify-center'>
                                <div className='max-w-[500px] max-h-[500px] '>
                                    <img className='w-full h-full object-cover block' src={amico} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-7 col-span-full'>
                            <h3 className='text-2xl left-7 font-bold not-italic text-default lg:text-start text-center mb-6'>
                                GIỚI THIỆU VỀ BATTECH
                            </h3>
                            <p className='text-base not-italic font-medium leading-6 mb-6 text-justify'>
                                Với gần 15 năm kinh nghiệm, Công ty cổ phần Quốc tế BATTECH là nhà cung cấp các giải
                                pháp quản trị nguồn lực doanh nghiệp chuyên nghiệp. Hỗ trợ Ban lãnh đạo hoạch định và
                                điều hành toàn bộ nguồn lực của doanh nghiệp bao gồm Hàng hóa - Tài chính - Nhân sự -
                                Truyền thông và kết nối các bộ phận thao tác nghiệp vụ hiệu quả thông qua những quy
                                trình được thiết kế theo quy chuẩn quốc tế.
                            </p>
                            <div className='grid grid-cols-12 gap-5 '>
                                {INTRODUCTION.map((item, index) => (
                                    <div key={index} className='md:col-span-3 sm:col-span-6 col-span-full'>
                                        <div className=' flex items-center flex-col shadow-baseShadow bg-white pt-[19px] pb-[7px] rounded-xl'>
                                            <img src={item.img} alt='' width='40' height='40' />
                                            <p className='mt-3 h-[64px] text-base font-semibold not-italic leading-6 text-center'>
                                                {item.title} <br /> {item.title2}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-[76px] '>
                            <span className='text-orange'>KHÁC BIỆT</span> VÀ TIÊN PHONG
                        </h3>
                        <div className='grid grid-cols-12 gap-8 '>
                            {list2.map((item, index) => (
                                <div className='lg:col-span-3 sm:col-span-6 col-span-12' key={index}>
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
                                                {`0${index + 1}`}
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
            {/* Form receive information */}
            <RegisterInformation />
            <Partner />
        </div>
    )
}

export default Home

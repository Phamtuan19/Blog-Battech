import axios from 'axios'
import { useTranslation } from 'react-i18next'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'

// import required modules
import { Autoplay, Pagination, Grid } from 'swiper/modules'

import './style.css'
import NewBannerItem from '~/component/customs/NewBannerItem'
import NewItem from '~/component/customs/NewItem'
import user from '~/assets/svg/user.svg'
import calendar from '~/assets/svg/calendar.svg'
import { useEffect, useState } from 'react'

interface TypeLatesNew {
    _id: string
    title: string
    image: string
    description: string
    content: string
    createdAt: string
}

function LatestNews() {
    const { t } = useTranslation(['home'])
    const [data, setData] = useState<TypeLatesNew[] | []>([])

    useEffect(() => {
        ;(async () => {
            const res = await axios.get('http://localhost:3001/api/posts')
            setData(res.data.data)
        })()
    }, [])
    console.log(data)
    return (
        <div>
            <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-2'>{t('news.title')}</h3>
            <div className=''>
                <h6 className='text-xl font-bold not-italic text-[#444444] mb-4'>{t('news.title2')}</h6>
                <div className='grid grid-cols-12 gap-3'>
                    <div className='lg:col-span-7 col-span-12 max-h-[358px]'>
                        <NewBannerItem
                            img='https://s3-alpha-sig.figma.com/img/77ef/c6b7/08345b0e32542e2ae3678931f63d980d?Expires=1691971200&Signature=H6dMTWS8h6LjxMT7ZCQzEnzsbDOk2r1AzAAjlL6iEGdFw5Rypebk9k7Hau1kazwwAkauW7MuhGBypRs1prag9ea6Wm49zwSNmL7qa286KrpOafHACXb1W7CJDIUwfR6tB6~39VrkI0X7klpiCsBPH50s8Ts3YfjCGGqxcK49t3ZT1JTvP-LkSiyYGS8VMY6EYj9s0WFfmIlozxAmJmtMMWyAAG11lPcyC8SnKJLSLA-OCIrjr7QLmegskr75WFySfn1jPKHttX9UhOlZ~edsCyxiWKwuhW7qly9E3p78oVw1iI83VCgXSPrqTftijCuBkL8h761G~P10ypptRYHstg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            btnName='Phát triển phần mềm'
                            content='Chuyển đổi số ngành sản xuất: Làm thế nào để doanh nghiệp tối ưu lợi thế trong thị trường siêu cạnh tranh?'
                            useName='Le Link'
                            date='May 4th 2023'
                        />
                    </div>
                    <div className='lg:col-span-5 col-span-12'>
                        <div className='col-span-12'>
                            <div
                                className='relative rounded-xl w-full max-h-[358px]'
                                style={{
                                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(https://s3-alpha-sig.figma.com/img/77ef/c6b7/08345b0e32542e2ae3678931f63d980d?Expires=1691971200&Signature=H6dMTWS8h6LjxMT7ZCQzEnzsbDOk2r1AzAAjlL6iEGdFw5Rypebk9k7Hau1kazwwAkauW7MuhGBypRs1prag9ea6Wm49zwSNmL7qa286KrpOafHACXb1W7CJDIUwfR6tB6~39VrkI0X7klpiCsBPH50s8Ts3YfjCGGqxcK49t3ZT1JTvP-LkSiyYGS8VMY6EYj9s0WFfmIlozxAmJmtMMWyAAG11lPcyC8SnKJLSLA-OCIrjr7QLmegskr75WFySfn1jPKHttX9UhOlZ~edsCyxiWKwuhW7qly9E3p78oVw1iI83VCgXSPrqTftijCuBkL8h761G~P10ypptRYHstg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                                    backgroundPosition: '50% 50%',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: 'lightgray'
                                }}
                            >
                                <p className='pb-[100%]'></p>
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
                                        Chuyển đổi số ngành sản xuất: Làm thế nào để doanh nghiệp tối ưu lợi thế trong
                                        thị trường siêu cạnh tranh?
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
                    </div>
                </div>

                <div className='mt-6'>
                    <h6 className='text-xl font-bold not-italic text-[#444444]'>{t('news.title3')}</h6>
                    <div className='mt-4 '>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                550: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                }
                            }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true
                            }}
                            // autoplay={{
                            //     delay: 2500,
                            //     disableOnInteraction: false
                            // }}
                            modules={[Autoplay, Pagination, Grid]}
                            className='relative w-full h-full bg-white pb-10 '
                        >
                            {data.length > 0
                                ? data.map((item) => {
                                      console.log(item)
                                      return (
                                          <SwiperSlide key={item._id}>
                                              <NewItem
                                                  img={item.image}
                                                  date={item.createdAt.toString().slice(0, 10)}
                                                  _id={item._id}
                                                  title={item.title}
                                                  description={item.description}
                                                  useName='Le Link'
                                              />
                                          </SwiperSlide>
                                      )
                                  })
                                : ''}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestNews

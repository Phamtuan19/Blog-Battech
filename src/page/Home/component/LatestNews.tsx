/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/exhaustive-deps */
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
import useRequest from '@ahooksjs/use-request'
import { PostType } from '~/types/post.type'
import { ARTICLETYPE } from '~/config/dataSample'
import { BASE_URL } from '~/config/env'

function LatestNews() {
    const { t } = useTranslation(['home'])

    const { loading, data } = useRequest(async () => {
        try {
            const res = await axios.get(BASE_URL + 'posts')
            return res.data
        } catch (err) {
            console.log(err)
        }
    })

    return (
        <div>
            <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-2'>{t('news.title')}</h3>
            <div className=''>
                <h6 className='text-xl font-bold not-italic text-[#444444] mb-4'>{t('news.title2')}</h6>
                <div className='grid grid-cols-11 lg:gap-x-8 gap-y-5'>
                    {!loading && data && (
                        <>
                            <div className='lg:col-span-7 col-span-12 max-h-[358px]'>
                                <NewBannerItem
                                    id={data[0]._id}
                                    img={data[0].image}
                                    btnName={ARTICLETYPE[data[0].articleTypeId - 1].name}
                                    content={data[0].title}
                                    useName='Le Link'
                                    date={data[0].createdAt.toString().slice(0, 10)}
                                />
                            </div>
                            <div className='lg:col-span-4 col-span-12'>
                                <NewBannerItem
                                    id={data[1].id}
                                    img={data[1].image}
                                    btnName={ARTICLETYPE[data[1].articleTypeId - 1].name}
                                    content={data[1].title}
                                    useName='Le Link'
                                    date={data[1].createdAt.toString().slice(0, 10)}
                                />
                            </div>
                        </>
                    )}
                </div>

                <div className='mt-6'>
                    <h6 className='text-xl font-bold not-italic text-[#444444]'>{t('news.title3')}</h6>
                    <div className='mt-4 '>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 5
                                },
                                550: {
                                    slidesPerView: 2,
                                    spaceBetween: 5
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                }
                            }}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            modules={[Autoplay, Pagination, Grid]}
                            className='relative w-full h-full pb-10 bg-[transparent]'
                        >
                            {data?.map((item: PostType) => (
                                <SwiperSlide key={item.id} className='px-1'>
                                    <NewItem
                                        img={item.image}
                                        date={item.createdAt.toString().slice(0, 10)}
                                        id={item.id}
                                        title={item.title}
                                        useName='Le Link'
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestNews

/* eslint-disable import/no-unresolved */
import { useTranslation } from 'react-i18next'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import image1 from '~/assets/image/image (1).png'
import image2 from '~/assets/image/image (2).png'
import image3 from '~/assets/image/image (3).png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const FeatData = [image1, image2, image3, image1, image2, image3]

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import LazyImage from '../LazyImage'

export default function Partner() {
    const { t } = useTranslation(['home'])

    return (
        <div className='lg:container w-full px-4 mx-auto'>
            <div className='mb-12'>
                <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-7 uppercase'>
                    {t('partner.title')}
                </h3>
                <div className='mt-4 '>
                    <Swiper
                        slidesPerView={4}
                        breakpoints={breakpoints}
                        spaceBetween={20}
                        pagination={{
                            clickable: true
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay, Pagination]}
                        className='relative w-full h-full bg-white px-1'
                    >
                        {FeatData.map((item) => (
                            <SwiperSlide
                                key={item}
                                className=' text-center bg-white shadow-baseShadow flex justify-center items-center rounded-xl overflow-hidden'
                            >
                                <div className=' flex justify-center items-center mx-auto w-[150px] h-[105px] object-contain'>
                                    <div className='flex justify-center items-center'>
                                        <LazyImage src={item} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 40
    }
}

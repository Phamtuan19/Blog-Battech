// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

export default function Partner() {
    return (
        <div className='lg:container w-full px-4 mx-auto'>
            <div className='mb-12'>
                <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-7'>ĐỐI TÁC</h3>
                <div className='mt-4 '>
                    <Swiper
                        slidesPerView={4}
                        breakpoints={breakpoints}
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

import { Link } from 'react-router-dom'
// import required modules
import { Autoplay, Pagination, Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import NewItemArticleDetail from './component/NewItem'
import NewItem from '~/component/customs/NewItem'

function ArticleDetails() {
    return (
        <div className='lg:container p-4 mx-auto mt-header '>
            <div className='flex flex-wrap text-base font-medium not-italic gap-2 pt-6 mb-6'>
                <Link to='' className='text-default'>
                    Tin tức /{' '}
                </Link>
                <Link to='' className='text-default'>
                    Phát triển phần mềm /{' '}
                </Link>
                <p className='text-[#929292]'>Chuyển đổi số ngành ngân hàng: Bức tranh lớn từ tổng quan đến chi tiết</p>
            </div>
            <div className='w-full grid grid-cols-12 md:gap-8 gap-y-8'>
                <div className='lg:col-span-8 col-span-full'>
                    <h1 className='md:text-[32px] text-2xl md:leading-9 leading-7 font-bold not-italic'>
                        Chuyển đổi số ngành ngân hàng: Bức tranh lớn từ tổng quan đến chi tiết
                    </h1>
                </div>
                <div className='lg:col-span-4 col-span-full'>
                    <h1 className='text-xl font-bold not-italic'>Tin tức mới</h1>
                    <div className='grid grid-cols-12 mt-3 gap-4'>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div className='lg:col-span-12 col-span-full'>
                                <NewItemArticleDetail key={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* line */}
            <div className='border border-solid border-default my-16'></div>

            {/*  */}
            <div className=''>
                <h3 className='text-[32px] leading-9 font-bold not-italic mb-3'>Tin tức liên quan</h3>
                <div className=''>
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 16
                            },
                            550: {
                                slidesPerView: 2,
                                spaceBetween: 16
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 16
                            }
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay, Pagination, Grid]}
                        className='relative w-full h-full bg-white pb-10 '
                    >
                        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                            <SwiperSlide key={item}>
                                <NewItem
                                    img='https://s3-alpha-sig.figma.com/img/e14a/401e/9308d8831b5ab34b62bf53b524f3a371?Expires=1692576000&Signature=RQxXzx4XRBP7T1BAqO79Mem9RYISNZ1jduZ4v2lwU4nQDODjHgN-xJKVhxxZ4ZbHV3MNJ0mIeaQVTAsJEC1~XflmWO5c7lJmvqiWWsIec2OS2rxh0pLM~Bwn4NDxLfpM-HVq92l1ialcxUlkWvJpxHo3OOzVsttGPXtnLqZpNIsy~p0NMRsqNOnObuVbO5-f5SW5MWfe3HnvioFXkAbpLXhBzvQRvJejfvjz8EQ7sSddQ4QhEVVvVuwtSyDwkLRx3uvwWuo3lL35~HXQlPHD1-clXURWIlHsmZn9vnSCO5yS-xAxuxZltphDRqJcbUzoirMHJmglHY4O~vr~G8p2~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                    useName='Le Link'
                                    date='May 4th 2023'
                                    title='Chuyển đổi số ngành truyền thông đại chúng: xu hướng mới trong lĩnh vực công nghệ số'
                                    content='Chuyển đổi số đang ảnh hưởng đến mọi ngành công nghiệp và ngành truyền thông cũng không ngoại lệ...'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails

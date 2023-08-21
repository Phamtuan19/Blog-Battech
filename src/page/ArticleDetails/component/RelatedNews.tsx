/* eslint-disable import/no-unresolved */
// import required modules
import { Autoplay, Pagination, Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import useRequest from '@ahooksjs/use-request'
import axios from 'axios'
import { PostType } from '~/types/post.type'
import NewItem from '~/component/customs/NewItem'

function RelatedNews(props: { articleTypeId: string }) {
    const { articleTypeId } = props

    const { data: postList } = useRequest(async () => {
        try {
            if (articleTypeId) {
                const res = await axios.get('http://localhost:3001/api/posts/article/' + articleTypeId)
                return res.data.data
            }
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <div>
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
                    className='relative bg-white pb-10 '
                >
                    {postList?.map((item: PostType) => (
                        <SwiperSlide key={item._id} className='w-full h-full' style={{ height: '100% !important' }}>
                            <NewItem
                                img={item.image}
                                useName='Le Link'
                                date={item.createdAt.toString().slice(0, 10)}
                                title={item.title}
                                description={item.description}
                                _id={item._id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
export default RelatedNews

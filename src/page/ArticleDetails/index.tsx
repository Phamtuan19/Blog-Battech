/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import useRequest from '@ahooksjs/use-request'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
    const { id } = useParams()

    const {
        loading,
        data: post,
        run: runPost
    } = useRequest(async (id) => {
        const res = await axios.get('http://localhost:3001/api/posts/' + id)
        return res.data.data
    })

    const {
        loading: loadingRelated,
        data: relatedNews,
        run: runRelatedNews
    } = useRequest(async (articleTypeId) => {
        const res = await axios.get('http://localhost:3001/api/posts/articleTypeId/' + articleTypeId)
        return res.data.data
    })

    console.log(relatedNews)

    useEffect(() => {
        runPost(id)
    }, [])

    useEffect(() => {
        runRelatedNews(post?.articleTypeId)
    }, [post])

    return (
        loading || (
            <div className='lg:container p-4 mx-auto mt-header '>
                <div className='flex flex-wrap text-base font-medium not-italic gap-2 pt-6 mb-6'>
                    <Link to='' className='text-default'>
                        Tin tức /{' '}
                    </Link>
                    <Link to='' className='text-default'>
                        Phát triển phần mềm /{' '}
                    </Link>
                    <p className='text-[#929292]'>{post.title}</p>
                </div>
                <div className='w-full grid grid-cols-12 md:gap-8 gap-y-8'>
                    <div className='lg:col-span-8 col-span-full'>
                        <h1 className='md:text-[32px] text-2xl md:leading-9 leading-7 font-bold not-italic'>
                            {post.title}
                        </h1>
                        <div className='' dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                    <div className='lg:col-span-4 col-span-full'>
                        <h1 className='text-xl font-bold not-italic'>Tin tức mới</h1>
                        <div className='grid grid-cols-12 mt-3 gap-4'>
                            {loadingRelated ||
                                relatedNews.map((item: any) => (
                                    <div key={item._id} className='lg:col-span-12 col-span-full'>
                                        <NewItemArticleDetail {...item} />
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
                            className='relative bg-white pb-10 '
                        >
                            {loadingRelated ||
                                relatedNews.map((item: any) => (
                                    <SwiperSlide
                                        key={item}
                                        className='w-full h-full'
                                        style={{ height: '100% !important' }}
                                    >
                                        <NewItem
                                            img={item.image}
                                            useName='Le Link'
                                            date={item.createdAt}
                                            title={item.title}
                                            description={item.description}
                                            _id={item._id}
                                        />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        )
    )
}

export default ArticleDetails

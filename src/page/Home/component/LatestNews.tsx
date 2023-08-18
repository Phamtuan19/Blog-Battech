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

function LatestNews() {
    const { t } = useTranslation(['home'])

    const { data: NewsEvents } = useRequest(async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/posts')
            return res.data.data
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
                    <div className='lg:col-span-7 col-span-12 max-h-[358px]'>
                        <NewBannerItem
                            img='https://s3-alpha-sig.figma.com/img/77ef/c6b7/08345b0e32542e2ae3678931f63d980d?Expires=1691971200&Signature=H6dMTWS8h6LjxMT7ZCQzEnzsbDOk2r1AzAAjlL6iEGdFw5Rypebk9k7Hau1kazwwAkauW7MuhGBypRs1prag9ea6Wm49zwSNmL7qa286KrpOafHACXb1W7CJDIUwfR6tB6~39VrkI0X7klpiCsBPH50s8Ts3YfjCGGqxcK49t3ZT1JTvP-LkSiyYGS8VMY6EYj9s0WFfmIlozxAmJmtMMWyAAG11lPcyC8SnKJLSLA-OCIrjr7QLmegskr75WFySfn1jPKHttX9UhOlZ~edsCyxiWKwuhW7qly9E3p78oVw1iI83VCgXSPrqTftijCuBkL8h761G~P10ypptRYHstg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            btnName='Phát triển phần mềm'
                            content='Chuyển đổi số ngành sản xuất: Làm thế nào để doanh nghiệp tối ưu lợi thế trong thị trường siêu cạnh tranh?'
                            useName='Le Link'
                            date='May 4th 2023'
                        />
                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <NewBannerItem
                            img='https://s3-alpha-sig.figma.com/img/7ce7/2014/ba2ca0ab1c516b94cf15cb79d78d5b40?Expires=1693180800&Signature=Q-1TM3uackZuMwXlddmV7~zrqJiwHkxJurpHNHbL-aPIxAkgRTxzAUysu36JzZxSsz8EYYMWChahk69TZYeZqOSODyFXqBgw-FSiVs8bGDclM74UMR7LrjqGe3zyIK07BPhcAEsTciCwopxKwn6LGX5yeoBQdU9oVDZ7IdBBWwafoxNxZYaonhp5F95XPWuUbCgUHcJd2eD2rj7ZexCXOFDZxwsgpYb1~3H86Wo6MwbVvsE44lhKM0oxuMtdRCEQzorxoS89263krl4fkztpPKlILGfl~xED1XvEYZK-vAuXS6a7KNAiSc-uyiNN2iReXIF1py1XMtt321mUnLQRiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            btnName='BLOCKCHAIN'
                            content='Blockchain là gì? Hoạt động và ứng dụng của Blockchain'
                            useName='Le Link'
                            date='May 4th 2023'
                        />
                    </div>
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
                                    spaceBetween: 30
                                }
                            }}
                            pagination={{
                                clickable: true
                            }}
                            // autoplay={{
                            //     delay: 3000,
                            //     disableOnInteraction: false
                            // }}
                            modules={[Autoplay, Pagination, Grid]}
                            className='relative w-full h-full pb-10 bg-[transparent]'
                        >
                            {NewsEvents?.map((item: PostType) => (
                                <SwiperSlide key={item._id}>
                                    <NewItem
                                        img={item.image}
                                        date={item.createdAt.toString().slice(0, 10)}
                                        _id={item._id}
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

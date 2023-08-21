/* eslint-disable import/no-unresolved */
import banner from '~/assets/svg/bannerIntroduction.svg'
import NewBannerItem from '~/component/customs/NewBannerItem'
import Banner from '~/component/customs/banner'
import Tabs from './component/Tabs'
import { useTranslation } from 'react-i18next'
import useRequest from '@ahooksjs/use-request'
import axios from 'axios'

function News() {
    const { t } = useTranslation(['news'])

    const { loading, data } = useRequest(async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/posts')
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    })

    console.log(data)

    return (
        <>
            <Banner
                img={banner}
                title={t('banner.title')}
                description={t('banner.description')}
                sx='-top-12'
                pb='pb-[40%]'
            />
            <div className='flex flex-col '>
                <div className='xl:container max-auto w-full p-4 flex flex-col gap-y-20'>
                    <div className=''>
                        <h3 className='text-xl font-bold not-italic text-[#444444] mb-4'>{t('news.title')}</h3>
                        {!loading && (
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='lg:col-span-7 col-span-full'>
                                    <NewBannerItem
                                        id={data[0]._id}
                                        img={data[0].image}
                                        btnName={data[0].articleTypeId.name}
                                        content={data[0].title}
                                        useName='Le Link'
                                        date={data[0].createdAt.toString().slice(0, 10)}
                                    />
                                </div>
                                <div className='lg:col-span-5 col-span-full h-auto  '>
                                    <div className='w-full grid grid-cols-12 gap-y-2'>
                                        <div className='col-span-full'>
                                            <NewBannerItem
                                                id={data[1]._id}
                                                img={data[1].image}
                                                btnName={data[1].articleTypeId.name}
                                                content={data[1].title}
                                                useName='Le Link'
                                                date={data[1].createdAt.toString().slice(0, 10)}
                                            />
                                        </div>
                                        <div className='col-span-full'>
                                            <NewBannerItem
                                                id={data[2]._id}
                                                img={data[2].image}
                                                btnName={data[2].articleTypeId.name}
                                                content={data[2].title}
                                                useName='Le Link'
                                                date={data[2].createdAt.toString().slice(0, 10)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className=''>
                        <Tabs />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News

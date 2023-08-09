import React from 'react'
import Banner from '~/component/customs/banner'
import banner4 from '~/assets/svg/banner-4.svg'
import Filter from './component/Filter'
import JobItem from './component/JobItem'
import { useTranslation } from 'react-i18next'

function JobOpportunity() {
    const { t } = useTranslation(['jobOpportunity'])

    const FILTER_1: { id: string; name: string }[] = t('job.workingGroup.list', { returnObjects: true })
    const FILTER_2: { id: string; name: string }[] = t('job.workLocation.list', { returnObjects: true })
    const FILTER_3: { id: string; name: string }[] = t('job.typeOfWork.list', { returnObjects: true })

    return (
        <div className=''>
            <Banner img={banner4} title={t('banner.title')} description={t('banner.description')} />

            <div className='lg:container mx-auto p-4 mb-20'>
                <h3 className='text-2xl font-bold not-italic leading-7 uppercase text-center'>
                    CƠ HỘI LÀM VIỆC HIỆN TẠI
                </h3>

                <div className='mt-10'>
                    <div className='flex rounded-xl border border-solid border-default'>
                        <input
                            type='text'
                            className='rounded-xl h-12 flex-1 outline-none px-5'
                            placeholder={t('job.form.placeholder')}
                        />
                        <button className='bg-default min-w-[200px] text-white py-[10px] px-10 rounded-xl'>
                            {t('job.form.btnName')}
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-x-8 gap-y-10 mt-10'>
                    <div className='md:col-span-3 col-span-full border-b border-b-gray-400 md:border-b-0 md:pb-0 pb-10'>
                        <div className='border-e-[2px] border-solid border-e-default'>
                            <div className='mb-8'>
                                <h1 className='text-xl font-bold not-italic'>{t('job.workingGroup.title')}</h1>
                                <Filter options={FILTER_1} />
                            </div>
                            <div className='mb-8'>
                                <h1 className='text-xl font-bold not-italic'>{t('job.workLocation.title')}</h1>
                                <Filter options={FILTER_2} />
                            </div>
                            <div className='mb-8'>
                                <h1 className='text-xl font-bold not-italic'>{t('job.typeOfWork.title')}</h1>
                                <Filter options={FILTER_3} />
                            </div>
                        </div>
                        <div className=''>
                            <button className='bg-default py-2 px-10 text-white rounded-xl'>
                                {t('job.btnFilter')}
                            </button>
                        </div>
                    </div>
                    <div className='md:col-span-9 col-span-full md:mt-0 mt-5'>
                        {/* <h5 className='flex justify-center w-full col-span-3 mt-[50px]'>
                            Hiện không có công việc nào, bạn vui lòng quay lại sau
                        </h5> */}

                        <div className=''>
                            <JobItem
                                jobName='Product Design'
                                jobTitle='Product Designer (Commercial)'
                                money='Thỏa thuận'
                                address='Hà Nội'
                                date='28/10/2022'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobOpportunity

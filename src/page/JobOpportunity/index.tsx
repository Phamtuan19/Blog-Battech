/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react'
import Banner from '~/component/customs/banner'
import banner4 from '~/assets/svg/banner-4.svg'
import Filter from './component/Filter'
import JobItem from './component/JobItem'
import { useTranslation } from 'react-i18next'
import useRequest from '@ahooksjs/use-request'
import axios from 'axios'
import Pagination from '~/component/customs/Pagination'
import { useMediaQuery } from 'react-responsive'

export interface FormAddJob {
    _id: string
    name: string
    technology: string
    addressId: { name: string }
    content: string
    quantity: number
    salaryLevel: string
    workGroupId: { name: string }
    createdAt: string
}

const workingTime = [
    {
        _id: '1',
        name: 'Toàn thời gian'
    },
    {
        _id: '2',
        name: 'Bán thời gian'
    },
    {
        _id: '3',
        name: 'Thực tập sinh'
    }
]

function JobOpportunity() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 450px)'
    })
    const { t } = useTranslation(['jobOpportunity'])
    const [workGroupId, setWorkGroupId] = useState<string>('')
    const [addressId, setAddressId] = useState<string>('')
    const [workingTimeId, setWorkingTimeId] = useState<string>('')
    const [page, setPage] = useState<number>(1)

    const { data: workGroups } = useRequest(async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/workGroup')
            return res.data.data
        } catch (error) {}
    })

    const { data: address } = useRequest(async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/address')
            return res.data.data
        } catch (error) {}
    })

    const { data: listJob, run: runGetJob } = useRequest(async () => {
        try {
            const res = await axios.get(
                `http://localhost:3001/api/job?&addressId=${addressId}&workGroupId=${workGroupId}&workingTimeId=${workingTimeId}&page=${page}`
            )
            console.log(res.data)
            return res.data
        } catch (error) {}
    })

    useEffect(() => {
        runGetJob()
    }, [page])

    const handleFilter = async () => {
        runGetJob()
    }

    return (
        <>
            <Banner
                img={banner4}
                title={t('banner.title')}
                description={t('banner.description')}
                sx='-top-12'
                sxItem='lg:items-end xl:pb-20'
                pb='xl:pb-[35%] pb-[40%]'
            />
            <div className=''>
                <div className='lg:container w-full mx-auto p-4 mb-20'>
                    <h3 className='text-2xl font-bold not-italic leading-7 uppercase text-center'>
                        CƠ HỘI LÀM VIỆC HIỆN TẠI
                    </h3>

                    <div className='mt-10'>
                        <div className='flex rounded-xl border border-solid border-default'>
                            <input
                                type='text'
                                className='rounded-xl h-12 flex-1 outline-none px-5 '
                                placeholder={t('job.form.placeholder')}
                            />
                            {!isDesktopOrLaptop && (
                                <button className='bg-default sm:min-w-[200px] text-white py-[10px] sm:px-10 rounded-xl'>
                                    {t('job.form.btnName')}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-12 md:gap-x-8 gap-y-10 mt-10'>
                        <div className='lg:col-span-3 col-span-full border-b border-b-gray-400 md:border-b-0 md:pb-0 pb-10'>
                            <div className='md:border-e-[2px] border-e-0 border-solid border-e-default'>
                                <div className='mb-8'>
                                    <h1 className='text-xl font-bold not-italic'>{t('job.workingGroup.title')}</h1>
                                    <Filter
                                        options={workGroups}
                                        jobAll='1'
                                        check={workGroupId}
                                        setCheck={setWorkGroupId}
                                    />
                                </div>
                                <div className='mb-8'>
                                    <h1 className='text-xl font-bold not-italic'>{t('job.workLocation.title')}</h1>
                                    <Filter options={address} jobAll='2' check={addressId} setCheck={setAddressId} />
                                </div>
                                <div className='mb-8'>
                                    <h1 className='text-xl font-bold not-italic'>{t('job.typeOfWork.title')}</h1>
                                    <Filter
                                        options={workingTime}
                                        check={workingTimeId}
                                        setCheck={setWorkingTimeId}
                                        jobAll={'workingTime'}
                                    />
                                </div>
                            </div>

                            <button className='bg-default py-2 px-10 text-white rounded-xl' onClick={handleFilter}>
                                {t('job.btnFilter')}
                            </button>
                        </div>
                        <div className='md:col-span-9 col-span-full md:mt-0 mt-5'>
                            {/* <h5 className='flex justify-center w-full col-span-3 mt-[50px]'>
                            Hiện không có công việc nào, bạn vui lòng quay lại sau
                        </h5> */}

                            <div className='flex flex-col gap-y-3'>
                                {listJob?.data?.map((item: FormAddJob) => <JobItem key={item._id} {...item} />)}
                            </div>
                            <div className='flex justify-center items-center mt-10'>
                                <Pagination page={page} pageCount={listJob?.pageCount || 1} setPage={setPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JobOpportunity

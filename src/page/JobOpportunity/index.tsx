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
import Button from '~/component/customs/Button'

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

const endpoints = ['http://localhost:3001/api/workGroup', 'http://localhost:3001/api/address']

function JobOpportunity() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 450px)'
    })
    const { t } = useTranslation(['jobOpportunity'])
    const [workGroupId, setWorkGroupId] = useState<string>('')
    const [addressId, setAddressId] = useState<string>('')
    const [workingTimeId, setWorkingTimeId] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>('')

    const { data: dataFilter } = useRequest(async () => {
        try {
            return await axios.all(
                endpoints.map(async (endpoint) => {
                    const res = await axios.get(endpoint)
                    return res.data.data
                })
            )
        } catch (error) {}
    })

    const { data: listJob, run: runGetJob } = useRequest(async () => {
        try {
            const res = await axios.get(
                `http://localhost:3001/api/job?q=${search}&addressId=${addressId}&workGroupId=${workGroupId}&workingTimeId=${workingTimeId}&page=${page}`
            )
            console.log(res.data)
            return res.data
        } catch (error) {}
    })

    useEffect(() => {
        runGetJob()
    }, [page])

    const handleFilter = async (): Promise<void> => {
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
                                value={search}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                            />
                            <Button onClick={handleFilter}>
                                {!isDesktopOrLaptop ? (
                                    t('job.form.btnName')
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        xmlnsXlink='http://www.w3.org/1999/xlink'
                                        fill='#FFF'
                                        height='24px'
                                        width='24px'
                                        version='1.1'
                                        id='Layer_1'
                                        viewBox='0 0 502.173 502.173'
                                        xmlSpace='preserve'
                                    >
                                        <g>
                                            <g>
                                                <g>
                                                    <path d='M494.336,443.646L316.402,265.713c20.399-31.421,30.023-68.955,27.189-106.632     C340.507,118.096,322.783,79.5,293.684,50.4C261.167,17.884,217.984,0,172.023,0c-0.222,0-0.445,0.001-0.668,0.001     C125.149,0.176,81.837,18.409,49.398,51.342c-66.308,67.316-65.691,176.257,1.375,242.85     c29.112,28.907,67.655,46.482,108.528,49.489c37.579,2.762,75.008-6.867,106.343-27.21l177.933,177.932     c5.18,5.18,11.984,7.77,18.788,7.77s13.608-2.59,18.789-7.769l13.182-13.182C504.695,470.862,504.695,454.006,494.336,443.646z      M480.193,467.079l-13.182,13.182c-2.563,2.563-6.73,2.561-9.292,0L273.914,296.456c-1.936-1.937-4.497-2.929-7.074-2.929     c-2.044,0-4.098,0.624-5.858,1.898c-60.538,43.788-143.018,37.3-196.118-15.425C5.592,221.146,5.046,124.867,63.646,65.377     c28.67-29.107,66.949-45.222,107.784-45.376c0.199,0,0.392-0.001,0.591-0.001c40.617,0,78.785,15.807,107.52,44.542     c53.108,53.108,59.759,135.751,15.814,196.509c-2.878,3.979-2.441,9.459,1.032,12.932l183.806,183.805     C482.755,460.35,482.755,464.517,480.193,467.079z' />
                                                    <path d='M259.633,84.449c-48.317-48.316-126.935-48.316-175.253,0c-23.406,23.406-36.296,54.526-36.296,87.627     c0,33.102,12.89,64.221,36.296,87.627S138.906,296,172.007,296c33.102,0,64.222-12.891,87.627-36.297     C307.951,211.386,307.951,132.767,259.633,84.449z M245.492,245.561C225.863,265.189,199.766,276,172.007,276     c-27.758,0-53.856-10.811-73.484-30.44c-19.628-19.628-30.438-45.726-30.438-73.484s10.809-53.855,30.438-73.484     c20.262-20.263,46.868-30.39,73.484-30.39c26.61,0,53.227,10.133,73.484,30.39C286.011,139.112,286.011,205.042,245.492,245.561z     ' />
                                                    <path d='M111.017,153.935c1.569-5.296-1.452-10.861-6.747-12.43c-5.294-1.569-10.86,1.451-12.429,6.746     c-8.73,29.459-0.668,61.244,21.04,82.952c1.952,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.928     c3.905-3.906,3.905-10.238,0-14.143C110.506,200.544,104.372,176.355,111.017,153.935z' />
                                                    <path d='M141.469,94.214c-10.748,4.211-20.367,10.514-28.588,18.735c-3.905,3.906-3.905,10.238,0,14.143     c1.952,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.07-2.929c6.26-6.26,13.575-11.057,21.741-14.255     c5.143-2.015,7.678-7.816,5.664-12.959C152.413,94.735,146.611,92.202,141.469,94.214z' />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-12 md:gap-x-8 gap-y-10 mt-10'>
                        <div className='lg:col-span-3 col-span-full border-b border-b-gray-400 md:border-b-0 md:pb-0 pb-10'>
                            <div className='md:border-e-[2px] border-e-0 border-solid border-e-default'>
                                <div className='mb-8'>
                                    <h1 className='text-xl font-bold not-italic'>{t('job.workingGroup.title')}</h1>
                                    {dataFilter && (
                                        <Filter
                                            options={dataFilter[0]}
                                            jobAll='1'
                                            check={workGroupId}
                                            setCheck={setWorkGroupId}
                                        />
                                    )}
                                </div>
                                <div className='mb-8'>
                                    <h1 className='text-xl font-bold not-italic'>{t('job.workLocation.title')}</h1>
                                    {dataFilter && (
                                        <Filter
                                            options={dataFilter[1]}
                                            jobAll='2'
                                            check={addressId}
                                            setCheck={setAddressId}
                                        />
                                    )}
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

                            <Button sx='bg-default py-2 px-10 text-white rounded-xl' onClick={handleFilter}>
                                {t('job.btnFilter')}
                            </Button>
                        </div>
                        <div className='md:col-span-9 col-span-full md:mt-0 mt-5'>
                            {listJob && (
                                <>
                                    <div className='flex flex-col gap-y-3'>
                                        {listJob.data.map((item: FormAddJob) => (
                                            <JobItem key={item._id} {...item} />
                                        ))}
                                    </div>
                                    <div className='flex justify-center items-center mt-10'>
                                        <Pagination page={page} pageCount={listJob?.pageCount || 1} setPage={setPage} />
                                    </div>
                                </>
                            )}
                            {/* <h5 className='flex justify-center w-full col-span-3 mt-[50px]'>
                                Hiện không có công việc nào, bạn vui lòng quay lại sau
                            </h5> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JobOpportunity

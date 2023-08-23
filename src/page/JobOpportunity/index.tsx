/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-unresolved */
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
import { BASE_URL } from '~/config/env'
import { ADDRESS, WORKGROUPS, WORKINGTIME } from '~/config/dataSample'

export interface FormAddJob {
    id: string
    name: string
    technology: string
    addressId: number
    content: string
    quantity: number
    salaryLevel: string
    workGroupId: number
    createdAt: string
}

function JobOpportunity() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 450px)'
    })
    const { t } = useTranslation(['jobOpportunity'])

    const [workGroupId, setWorkGroupId] = useState<number>(0)
    const [workingTimeId, setWorkingTimeId] = useState<number>(0)
    const [addressId, setAddressId] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)
    const [search, setSearch] = useState<string>('')

    const {
        loading,
        data: listJob,
        run: runGetJob
    } = useRequest(async () => {
        try {
            const queryParams = {
                _page: page,
                _limit: 5,
                workGroupId: workGroupId !== 0 ? workGroupId : undefined,
                workingTimeId: workingTimeId !== 0 ? workingTimeId : undefined,
                addressId: addressId !== 0 ? addressId : undefined,
                name: search !== '' ? search : undefined
            }

            const queryString = Object.entries(queryParams)
                .filter(([_, value]) => value !== undefined)
                .map(([key, value]) => `${key}=${value}`)
                .join('&')

            const res = await axios.get(BASE_URL + `jobs?${queryString}`)
            const resType = await axios.get(BASE_URL + `jobs?${queryString}`)
            setPageCount(Math.ceil(resType?.data?.length / 5))

            return res?.data
        } catch (error) {
            console.log(error)
        }
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
                    <h3 className='text-2xl font-bold not-italic leading-7 uppercase text-center'>{t('job.title')}</h3>

                    <div className='mt-10'>
                        <div className='flex rounded-xl'>
                            <input
                                type='text'
                                className='rounded-s-xl h-12 flex-1 outline-none px-5 border border-solid border-default '
                                placeholder={t('job.form.placeholder')}
                                value={search}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                            />
                            <Button rounded='rounded-e-xl' onClick={handleFilter}>
                                {!isDesktopOrLaptop ? (
                                    t('job.form.btnName')
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 101 101'
                                        id='search'
                                        fill='white'
                                    >
                                        <path d='M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z' />
                                    </svg>
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-12 md:gap-x-8 gap-y-10 mt-10'>
                        <div className='md:col-span-3 col-span-full border-b border-b-gray-400 md:border-b-0 md:pb-0 pb-10'>
                            <div className='md:border-e-[2px] border-e-0 border-solid border-e-default'>
                                <div className='mb-8'>
                                    <h1 className='text-xl font-bold not-italic'>{t('job.workingGroup.title')}</h1>
                                    {WORKGROUPS && (
                                        <Filter options={WORKGROUPS} check={workGroupId} setCheck={setWorkGroupId} />
                                    )}
                                </div>
                                <div className='mb-8'>
                                    <h1 className='text-xl font-bold not-italic'>{t('job.workLocation.title')}</h1>
                                    {ADDRESS && <Filter options={ADDRESS} check={addressId} setCheck={setAddressId} />}
                                </div>
                                <div className='mb-8'>
                                    <h1 className='text-xl font-bold not-italic'>{t('job.typeOfWork.title')}</h1>
                                    {WORKINGTIME && (
                                        <Filter
                                            options={WORKINGTIME}
                                            check={workingTimeId}
                                            setCheck={setWorkingTimeId}
                                        />
                                    )}
                                </div>
                            </div>

                            <Button sx='bg-default py-2 px-10 text-white rounded-xl' onClick={handleFilter}>
                                {t('job.btnFilter')}
                            </Button>
                        </div>
                        <div className='md:col-span-9 col-span-full md:mt-0 mt-5'>
                            {!loading &&
                                (listJob && listJob.length > 0 ? (
                                    <>
                                        <div className='flex flex-col gap-y-3'>
                                            {listJob.map((item: FormAddJob) => (
                                                <JobItem key={item.id} {...item} />
                                            ))}
                                        </div>
                                        <div className='flex justify-center items-center mt-10'>
                                            <Pagination page={page} pageCount={pageCount} setPage={setPage} />
                                        </div>
                                    </>
                                ) : (
                                    <h5 className='flex justify-center w-full col-span-3 mt-[50px] font-bold text-xl'>
                                        Hiện không có công việc nào, bạn vui lòng quay lại sau
                                    </h5>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JobOpportunity

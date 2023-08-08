import React from 'react'
import Banner from '~/component/customs/banner'
import banner4 from '~/assets/svg/banner-4.svg'
import Filter from './component/Filter'
import JobItem from './component/JobItem'

const FILTER_1 = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Frontend' },
    { id: 3, name: 'Backend' },
    { id: 4, name: 'Product Design' },
    { id: 5, name: 'Tester' },
    { id: 6, name: 'HR' }
]
const FILTER_2 = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Hà Nội' },
    { id: 3, name: 'Backend' },
    { id: 4, name: 'Hồ Chí Minh' }
]
const FILTER_3 = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Toàn thời gian' },
    { id: 3, name: 'Bán thời gian' },
    { id: 4, name: 'Thực tập sinh' }
]

function JobOpportunity() {
    return (
        <div className=''>
            <Banner
                img={banner4}
                title='Công việc giấc mơ của bạn là đây'
                description='BATTECH tin tưởng vào tiềm năng và sự vĩ đại của mỗi người. Chúng tôi coi trọng việc học hỏi, hợp tác và hỗ trợ lẫn nhau. Khám phá bản thân. Hãy cho chúng tôi biết bạn đã có những gì và chúng tôi sẽ liên hệ với bạn nếu có một vai trò nào đó có vẻ phù hợp.'
            />

            <div className='lg:container mx-auto p-4 mb-20'>
                <h3 className='text-2xl font-bold not-italic leading-7 uppercase text-center'>
                    CƠ HỘI LÀM VIỆC HIỆN TẠI
                </h3>

                <div className='mt-10'>
                    <div className='flex rounded-xl border border-solid border-default'>
                        <input
                            type='text'
                            className='rounded-xl h-12 flex-1 outline-none px-5'
                            placeholder='Tên công việc'
                        />
                        <button className='bg-default text-white py-[10px] px-10 rounded-xl'>Tìm việc làm</button>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-x-8 gap-y-10 mt-10'>
                    <div className='md:col-span-3 col-span-full border-b border-b-gray-400 md:border-b-0 md:pb-0 pb-10'>
                        <div className='border-e-[2px] border-solid border-e-default'>
                            <div className='mb-8'>
                                <h1 className='text-xl font-bold not-italic'>Nhóm công việc</h1>
                                <Filter options={FILTER_1} />
                            </div>
                            <div className='mb-8'>
                                <h1 className='text-xl font-bold not-italic'>Địa điểm làm việc</h1>
                                <Filter options={FILTER_2} />
                            </div>
                            <div className='mb-8'>
                                <h1 className='text-xl font-bold not-italic'>Loại công việc</h1>
                                <Filter options={FILTER_3} />
                            </div>
                        </div>
                        <div className=''>
                            <button className='bg-default py-2 px-10 text-white rounded-xl'>Áp dụng bộ lọc</button>
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

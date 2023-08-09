import React from 'react'
import Banner from '~/component/customs/banner'

import banner6 from '~/assets/svg/banner-6.svg'
import { Link } from 'react-router-dom'
import ApplyDirectly from './component/ApplyDirectly'
import JobItem from './component/JobItem'

function JobDetail() {
    return (
        <div>
            <Banner
                img={banner6}
                title='Công việc giấc mơ của bạn là đây'
                description='BATTECH tin tưởng vào tiềm năng và sự vĩ đại của mỗi người. Chúng tôi coi trọng việc học hỏi, hợp tác và hỗ trợ lẫn nhau. Khám phá bản thân. Hãy cho chúng tôi biết bạn đã có những gì và chúng tôi sẽ liên hệ với bạn nếu có một vai trò nào đó có vẻ phù hợp.'
            />
            <div className='lg:container mx-auto p-4'>
                <div className='flex flex-wrap text-base font-medium not-italic gap-2 pt-6 mb-6'>
                    <Link to='' className='text-default'>
                        Cơ hội việc làm /
                    </Link>
                    <p className='text-[#929292]'>
                        Chuyển đổi số ngành ngân hàng: Bức tranh lớn từ tổng quan đến chi tiết
                    </p>
                </div>
                <div className='mt-7 grid grid-cols-12 lg:gap-8 gap-y-8'>
                    <div className='lg:col-span-8 col-span-full'>
                        <h1 className='text-2xl font-bold not-italic'>Lập trình viên NodeJS</h1>
                        <p className='text-base font-normal not-italic'>#NodeJS #Javascript</p>
                        <div className='flex gap-8'>
                            <div className='flex items-center gap-1'>
                                <span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='11'
                                        height='15'
                                        viewBox='0 0 11 15'
                                        fill='none'
                                    >
                                        <path
                                            d='M4.70312 14.4766C0.710938 8.73438 0 8.13281 0 6C0 3.10156 2.32422 0.75 5.25 0.75C8.14844 0.75 10.5 3.10156 10.5 6C10.5 8.13281 9.76172 8.73438 5.76953 14.4766C5.52344 14.8594 4.94922 14.8594 4.70312 14.4766ZM5.25 8.1875C6.45312 8.1875 7.4375 7.23047 7.4375 6C7.4375 4.79688 6.45312 3.8125 5.25 3.8125C4.01953 3.8125 3.0625 4.79688 3.0625 6C3.0625 7.23047 4.01953 8.1875 5.25 8.1875Z'
                                            fill='#979797'
                                        />
                                    </svg>
                                </span>
                                <span className='text-sm text-[#979797] font-normal leading-7 not-italic'>Hà Nội</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='14'
                                        height='15'
                                        viewBox='0 0 14 15'
                                        fill='none'
                                    >
                                        <path
                                            d='M7 0.96875C10.7461 0.96875 13.7812 4.00391 13.7812 7.75C13.7812 11.4961 10.7461 14.5312 7 14.5312C3.25391 14.5312 0.21875 11.4961 0.21875 7.75C0.21875 4.00391 3.25391 0.96875 7 0.96875ZM7 13.2188C10.0078 13.2188 12.4688 10.7852 12.4688 7.75C12.4688 4.74219 10.0078 2.28125 7 2.28125C3.96484 2.28125 1.53125 4.74219 1.53125 7.75C1.53125 10.7852 3.96484 13.2188 7 13.2188ZM8.66797 10.375L6.34375 8.67969C6.26172 8.625 6.23438 8.51562 6.23438 8.43359V3.92188C6.23438 3.75781 6.37109 3.59375 6.5625 3.59375H7.4375C7.60156 3.59375 7.76562 3.75781 7.76562 3.92188V7.80469L9.57031 9.14453C9.73438 9.25391 9.76172 9.44531 9.65234 9.60938L9.13281 10.293C9.02344 10.457 8.83203 10.4844 8.66797 10.375Z'
                                            fill='#979797'
                                        />
                                    </svg>
                                </span>
                                <span className='text-sm text-[#979797] font-normal leading-7 not-italic'>
                                    28/10/2022
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 col-span-full lg:mt-7 mt-10'>
                        <ApplyDirectly />

                        <div className='mt-5 p-3 border border-solid border-default rounded-xl'>
                            <h1 className='text-2xl font-bold not-italic'>Công việc tương tự</h1>

                            <div className=''>
                                <JobItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobDetail

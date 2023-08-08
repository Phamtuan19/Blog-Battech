import React from 'react'

interface TypeJobItem {
    money: string
    address: string
    date: string
    jobName: string
    jobTitle: string
}

function JobItem(props: TypeJobItem) {
    const { money, address, date, jobName, jobTitle } = props

    return (
        <div className='bg-[#EEEEEE] p-4 rounded-md flex justify-between'>
            <div className='w-full'>
                <h4
                    className='text-xl font-bold not-italic'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {jobName || 'Product Design'}
                </h4>
                <p
                    className='text-base font-normal not-italic leading-normal'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {jobTitle || 'Product Designer (Commercial)'}
                </p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-8'>
                        <div className='flex items-center gap-1'>
                            <span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='10'
                                    height='15'
                                    viewBox='0 0 10 15'
                                    fill='none'
                                >
                                    <path
                                        d='M6.71484 7.14844C8.30078 7.61328 9.28516 9.33594 8.68359 11.0312C8.27344 12.2344 7.07031 12.9727 5.8125 13V14.3125C5.8125 14.5586 5.59375 14.75 5.375 14.75H4.5C4.25391 14.75 4.0625 14.5586 4.0625 14.3125V13C3.1875 13 2.36719 12.7266 1.68359 12.1797C1.46484 12.0156 1.4375 11.7148 1.62891 11.5234L2.58594 10.5938C2.72266 10.457 2.94141 10.4297 3.13281 10.5391C3.40625 10.7305 3.73438 10.8125 4.0625 10.8125H5.86719C6.30469 10.8125 6.6875 10.457 6.6875 10.0195C6.6875 9.66406 6.44141 9.33594 6.08594 9.25391L3.29688 8.43359C2.06641 8.07812 1.10938 7.03906 1 5.78125C0.835938 4.00391 2.23047 2.5 3.98047 2.5H4.0625V1.1875C4.0625 0.96875 4.25391 0.75 4.5 0.75H5.375C5.59375 0.75 5.8125 0.96875 5.8125 1.1875V2.5C6.66016 2.52734 7.50781 2.80078 8.16406 3.32031C8.38281 3.51172 8.41016 3.8125 8.21875 4.00391L7.26172 4.93359C7.125 5.07031 6.90625 5.09766 6.74219 4.98828C6.46875 4.79688 6.14062 4.6875 5.78516 4.6875H3.98047C3.54297 4.6875 3.1875 5.07031 3.1875 5.50781C3.1875 5.86328 3.40625 6.19141 3.76172 6.27344L6.71484 7.14844Z'
                                        fill='#979797'
                                    />
                                </svg>
                            </span>
                            <span className='text-sm text-[#979797] font-normal leading-7 not-italic'>
                                {money || 'Thỏa thuận'}
                            </span>
                        </div>
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
                            <span className='text-sm text-[#979797] font-normal leading-7 not-italic'>
                                {address || 'Hà Nội'}
                            </span>
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
                                {date || '28/10/2022'}
                            </span>
                        </div>
                    </div>
                    <button className='rounded-md bg-default text-xs leading-6 uppercase not-italic font-semibold text-white py-2 px-5'>
                        Ứng tuyển
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JobItem

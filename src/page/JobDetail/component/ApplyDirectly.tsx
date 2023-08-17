import React from 'react'

function ApplyDirectly() {
    return (
        <div className='p-3 border border-solid border-default rounded-xl'>
            <h1 className='text-2xl font-bold not-italic'>Lập trình viên NodeJS</h1>
            <div className='mt-4 flex flex-col gap-y-4'>
                <div className=''>
                    <label htmlFor='name'>
                        Họ tên của bạn <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 14 16' fill='none'>
                            <path
                                d='M13.105 15.2467V13.6693C13.105 12.8327 12.7962 12.0303 12.2467 11.4387C11.6971 10.8471 10.9517 10.5147 10.1745 10.5147H4.31371C3.53652 10.5147 2.79116 10.8471 2.2416 11.4387C1.69204 12.0303 1.3833 12.8327 1.3833 13.6693V15.2467M10.1745 4.20542C10.1745 5.94768 8.86255 7.36006 7.24413 7.36006C5.6257 7.36006 4.31371 5.94768 4.31371 4.20542C4.31371 2.46316 5.6257 1.05078 7.24413 1.05078C8.86255 1.05078 10.1745 2.46316 10.1745 4.20542Z'
                                stroke='#969696'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                        <input type='text' placeholder='Bùi văn A' className='h-[42px] flex-1 outline-none' />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor='name'>
                        Email <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='17' height='15' viewBox='0 0 17 15' fill='none'>
                            <path
                                d='M15.6671 4.32047L8.63406 9.8005L1.60107 4.32047M3.00767 1.71094H14.2605C15.0341 1.71094 15.6671 2.41551 15.6671 3.27666V12.671C15.6671 13.5321 15.0341 14.2367 14.2605 14.2367H3.00767C2.23404 14.2367 1.60107 13.5321 1.60107 12.671V3.27666C1.60107 2.41551 2.23404 1.71094 3.00767 1.71094Z'
                                stroke='#969696'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                        <input type='text' className='h-[42px] flex-1 outline-none' placeholder='123@gmail.com' />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor='name'>
                        Số điện thoại <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
                            <path
                                d='M5.43088 9.04143C6.55615 11.4046 8.3691 13.3336 10.5806 14.5444L12.2998 12.7073C12.5108 12.4818 12.8233 12.4067 13.0968 12.5069C13.9721 12.8159 14.9176 12.9829 15.8866 12.9829C16.3164 12.9829 16.668 13.3586 16.668 13.8179V16.7323C16.668 17.1915 16.3164 17.5673 15.8866 17.5673C8.54883 17.5673 2.60205 11.2126 2.60205 3.37143C2.60205 2.91215 2.9537 2.53638 3.38349 2.53638H6.11855C6.54834 2.53638 6.89999 2.91215 6.89999 3.37143C6.89999 4.41524 7.05628 5.4173 7.34541 6.35256C7.43137 6.64483 7.36885 6.9705 7.15005 7.20432L5.43088 9.04143Z'
                                fill='#AAAAAA'
                            />
                        </svg>
                        <input type='text' className='h-[42px] flex-1 outline-none' placeholder='0123456789' />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor='name'>
                        Đính kèm CV <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='27' height='28' viewBox='0 0 27 28' fill='none'>
                            <path
                                d='M18.8172 10.7214L14.4991 19.1433C13.6692 20.7617 11.7704 21.3544 10.2558 20.4676C8.74127 19.5809 8.18667 17.5517 9.0165 15.9333L13.7101 6.77912C14.2283 5.7685 15.4164 5.39769 16.3621 5.95141C17.3079 6.50513 17.6549 7.77474 17.1367 8.78536L13.1941 16.4749C12.9876 16.8776 12.5102 17.0266 12.1333 16.8059C11.7563 16.5853 11.6169 16.0751 11.8234 15.6724L15.3906 8.7152L14.3626 8.11333L10.7955 15.0705C10.2773 16.0811 10.6243 17.3507 11.57 17.9044C12.5158 18.4582 13.7039 18.0873 14.2221 17.0767L18.1647 9.38723C18.9945 7.76877 18.4399 5.73966 16.9253 4.85291C15.4108 3.96615 13.5119 4.5588 12.6821 6.17725L7.98852 15.3314C6.84704 17.5577 7.60923 20.3463 9.6926 21.5661C11.776 22.7859 14.3856 21.9714 15.527 19.7451L19.8451 11.3233L18.8172 10.7214Z'
                                fill='#959595'
                            />
                        </svg>
                        <input type='text' className='h-[42px] flex-1 outline-none' placeholder='bui van A.pdf' />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor='name'>
                        Địa chỉ Facebook/Skype/Linked <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M1.8208 10.8663C1.8208 6.25678 5.32167 2.51575 9.63523 2.51575C13.9488 2.51575 17.4497 6.25678 17.4497 10.8663V12.0604C17.4497 13.7054 16.2541 15.0415 14.7146 15.0415C13.7847 15.0415 12.9095 14.5572 12.4015 13.814C11.6982 14.5739 10.7136 15.0415 9.63523 15.0415C7.47845 15.0415 5.72802 13.171 5.72802 10.8663C5.72802 8.56152 7.47845 6.691 9.63523 6.691C11.792 6.691 13.5424 8.56152 13.5424 10.8663V12.0604C13.5424 12.7201 14.0973 13.3714 14.7146 13.3714C15.332 13.3714 15.8868 12.7201 15.8868 12.0604V10.8663C15.8868 7.24214 13.0267 4.18585 9.63523 4.18585C6.24377 4.18585 3.38369 7.24214 3.38369 10.8663C3.38369 14.4904 6.24377 17.5467 9.63523 17.5467H13.5424V19.2168H9.63523C5.32167 19.2168 1.8208 15.4757 1.8208 10.8663ZM7.2909 10.8663C7.2909 12.2524 8.33804 13.3714 9.63523 13.3714C10.9324 13.3714 11.9796 12.2524 11.9796 10.8663C11.9796 9.48008 10.9324 8.36111 9.63523 8.36111C8.33804 8.36111 7.2909 9.48008 7.2909 10.8663Z'
                                fill='#AAAAAA'
                            />
                        </svg>
                        <input type='text' className='h-[42px] flex-1 outline-none' placeholder='facebook.com' />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor='name'>
                        Bạn biết đến BATTECH qua đâu? <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M15.1051 2.50598H4.16494C3.29754 2.50598 2.60205 3.25753 2.60205 4.17608V15.8668C2.60205 16.7854 3.29754 17.5369 4.16494 17.5369H7.29071L9.63504 20.0421L11.9794 17.5369H15.1051C15.9647 17.5369 16.668 16.7854 16.668 15.8668V4.17608C16.668 3.25753 15.9647 2.50598 15.1051 2.50598ZM10.4165 14.1967V15.8668H8.8536V14.1967H10.4165ZM11.3308 10.1634L12.0341 9.39516C12.4795 8.91918 12.7608 8.25114 12.7608 7.51629C12.7608 5.67083 11.362 4.17608 9.63504 4.17608C7.90805 4.17608 6.50927 5.67083 6.50927 7.51629H8.07215C8.07215 6.59773 8.77545 5.84619 9.63504 5.84619C10.4946 5.84619 11.1979 6.59773 11.1979 7.51629C11.1979 7.97557 11.026 8.39309 10.7369 8.69371L9.76789 9.74588C9.20525 10.3555 8.8536 11.1905 8.8536 12.1091V12.5266H10.4165C10.4165 11.274 10.7681 10.773 11.3308 10.1634Z'
                                fill='#AAAAAA'
                            />
                        </svg>
                        <input type='text' className='h-[42px] flex-1 outline-none' placeholder='qua bạn bè...' />
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <textarea name='' id='' cols={30} rows={10}></textarea>
                    </div>
                </div>
                <div className=''>
                    <button className='text-xl font-bold leading-normal not-italic text-center py-2 w-full bg-default text-white rounded-md'>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ApplyDirectly

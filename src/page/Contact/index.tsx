/* eslint-disable import/no-unresolved */
import React from 'react'
import bannerSvg from '~/assets/svg/banner-7.svg'
import Form from './component/Form'
import { useTranslation } from 'react-i18next'
import Banner from '~/component/customs/banner'

function Contact() {
    const { t } = useTranslation(['contact', 'validationMessage'])
    return (
        <>
            <div className=''>
                <Banner
                    img={bannerSvg}
                    title={t('banner.title')}
                    title2={t('banner.title2')}
                    description={t('banner.description')}
                    pb='pb-[45%] '
                    sx='-top-12'
                    sxItem='lg:-top-10'
                />
            </div>
            <div className='lg:container mx-auto px-4'>
                <div className='grid grid-cols-12 lg:gap-x-3 lg:gap-y-32 gap-y-10'>
                    <div className='lg:col-span-6 col-span-full'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.978965078186!2d105.81467728715822!3d20.962763600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad2838c1faed%3A0x22f08f742bc365f6!2sBAT%20GROUP!5e0!3m2!1svi!2s!4v1691544457890!5m2!1svi!2s'
                            width='600'
                            height='450'
                            style={{ border: 0 }}
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            className='rounded-xl overflow-hidden w-full min-w-[300px]'
                        ></iframe>
                    </div>
                    <div className='lg:col-span-6 col-span-full mb-2 flex flex-col '>
                        <div className=''>
                            <h1 className='text-2xl font-bold not-italic text-default'>{t('contactUs.title')}</h1>
                            <p className='text-base mb-3 mt-2 font-medium not-italic'>{t('contactUs.content')}</p>
                        </div>
                        <div className='flex-1 mt-4 flex flex-col justify-between gap-y-4 '>
                            <div
                                className='bg-white py-3 px-4 rounded-lg'
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
                            >
                                <div className='flex items-center gap-2'>
                                    <span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                        >
                                            <g id='pin_drop' clipPath='url(#clip0_1_1288)'>
                                                <path
                                                    id='Vector'
                                                    d='M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z'
                                                    fill='#008345'
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id='clip0_1_1288'>
                                                    <rect width='24' height='24' fill='white' />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className='text-[#7A7A7A]'>{t('information.address')}</span>
                                </div>
                                <p className='ps-8 mt-2'>
                                    Tầng 2, Tòa HH02, Eco Lakeview, 32 Đại Từ, P. Đại Kim, Q. Hoàng Mai, TP. Hà Nội
                                </p>
                            </div>
                            <div
                                className='bg-white py-3 px-4 rounded-lg'
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
                            >
                                <div className='flex items-center gap-2'>
                                    <span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                        >
                                            <g clipPath='url(#clip0_1_1296)'>
                                                <path
                                                    d='M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z'
                                                    fill='#008345'
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id='clip0_1_1296'>
                                                    <rect width='24' height='24' fill='white' />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className='text-[#7A7A7A]'>{t('information.email')}</span>
                                </div>
                                <p className='ps-8 mt-2'>cskh@battech.vn</p>
                            </div>
                            <div
                                className='bg-white py-3 px-4 rounded-lg'
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
                            >
                                <div className='flex items-center gap-2'>
                                    <span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                        >
                                            <g clipPath='url(#clip0_1_1302)'>
                                                <path
                                                    d='M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z'
                                                    fill='#008345'
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id='clip0_1_1302'>
                                                    <rect width='24' height='24' fill='white' />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className='text-[#7A7A7A]'>{t('information.phone')}</span>
                                </div>
                                <p className='ps-8 mt-2'>024 85 896 999</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-full'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold not-italic'>{t('form.title')}</h2>
                            <p>
                                {t('form.content')}
                                <span className='text-red-500'>*</span>
                            </p>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact

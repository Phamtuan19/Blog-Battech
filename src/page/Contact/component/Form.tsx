import React from 'react'
import { useTranslation } from 'react-i18next'

function Form() {
    const { t } = useTranslation(['contact'])
    return (
        <div className='grid grid-cols-12 lg:gap-x-11'>
            <div className='lg:col-span-6 col-span-full flex flex-col justify-center gap-y-3'>
                <div className=''>
                    <label htmlFor='name'>
                        {t('form.formInput.name.label')} <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 14 16' fill='none'>
                            <path
                                d='M13.105 15.2467V13.6693C13.105 12.8327 12.7962 12.0303 12.2467 11.4387C11.6971 10.8471 10.9517 10.5147 10.1745 10.5147H4.31371C3.53652 10.5147 2.79116 10.8471 2.2416 11.4387C1.69204 12.0303 1.3833 12.8327 1.3833 13.6693V15.2467M10.1745 4.20542C10.1745 5.94768 8.86255 7.36006 7.24413 7.36006C5.6257 7.36006 4.31371 5.94768 4.31371 4.20542C4.31371 2.46316 5.6257 1.05078 7.24413 1.05078C8.86255 1.05078 10.1745 2.46316 10.1745 4.20542Z'
                                stroke='#969696'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                        <input
                            type='text'
                            placeholder={t('form.formInput.name.placeholder')}
                            className='h-[42px] flex-1 outline-none'
                        />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor='name'>
                        {t('form.formInput.email.label')} <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 14 16' fill='none'>
                            <path
                                d='M13.105 15.2467V13.6693C13.105 12.8327 12.7962 12.0303 12.2467 11.4387C11.6971 10.8471 10.9517 10.5147 10.1745 10.5147H4.31371C3.53652 10.5147 2.79116 10.8471 2.2416 11.4387C1.69204 12.0303 1.3833 12.8327 1.3833 13.6693V15.2467M10.1745 4.20542C10.1745 5.94768 8.86255 7.36006 7.24413 7.36006C5.6257 7.36006 4.31371 5.94768 4.31371 4.20542C4.31371 2.46316 5.6257 1.05078 7.24413 1.05078C8.86255 1.05078 10.1745 2.46316 10.1745 4.20542Z'
                                stroke='#969696'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                        <input
                            type='text'
                            placeholder={t('form.formInput.name.placeholder')}
                            className='h-[42px] flex-1 outline-none'
                        />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor='name'>
                        {t('form.formInput.phone.label')} <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center gap-3 border border-solid border-[#00000040] rounded-md px-3'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 14 16' fill='none'>
                            <path
                                d='M13.105 15.2467V13.6693C13.105 12.8327 12.7962 12.0303 12.2467 11.4387C11.6971 10.8471 10.9517 10.5147 10.1745 10.5147H4.31371C3.53652 10.5147 2.79116 10.8471 2.2416 11.4387C1.69204 12.0303 1.3833 12.8327 1.3833 13.6693V15.2467M10.1745 4.20542C10.1745 5.94768 8.86255 7.36006 7.24413 7.36006C5.6257 7.36006 4.31371 5.94768 4.31371 4.20542C4.31371 2.46316 5.6257 1.05078 7.24413 1.05078C8.86255 1.05078 10.1745 2.46316 10.1745 4.20542Z'
                                stroke='#969696'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                        <input
                            type='text'
                            placeholder={t('form.formInput.phone.placeholder')}
                            className='h-[42px] flex-1 outline-none'
                        />
                    </div>
                </div>
            </div>
            <div className='lg:col-span-6 col-span-full flex flex-col justify-between'>
                <div className='flex flex-col items-center gap-3 '>
                    <label htmlFor='' className='block mb-3'></label>
                    <textarea
                        id='message'
                        rows={6}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none'
                        placeholder={t('form.formInput.textarea.placeholder')}
                    ></textarea>
                </div>
                <div className='mt-3'>
                    <button className='text-xl font-bold leading-normal not-italic text-center py-2 w-full bg-default text-white rounded-md'>
                        {t('form.formInput.btnName')}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Form

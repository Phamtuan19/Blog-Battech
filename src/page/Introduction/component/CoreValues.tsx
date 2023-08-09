import React from 'react'
import { useTranslation } from 'react-i18next'

function CoreValues() {
    const { t } = useTranslation(['introduction'])

    const bat: string[] = t('coreValues.bat', { returnObjects: true })
    const tech: string[] = t('coreValues.tech', { returnObjects: true })
    const core: string[] = t('coreValues.core.list', { returnObjects: true })

    return (
        <div className='xl:w-3/4 w-full bg-[#E9F9D6] py-10 xl:rounded-e-3xl' style={{ marginLeft: '0px !important' }}>
            <div className='grid grid-cols-12 lg:gap-5 gap-y-10 gap-x-5 px-28'>
                <div className='xl:col-span-3 md:col-span-6 col-span-full'>
                    <h3 className='text-xl font-bold left-7 text-orange'>BAT</h3>
                    <div className='text-base font-medium flex flex-col gap-3 mt-5 '>
                        {bat.map((item, index) => (
                            <p key={index} className='leading-10 rounded-lg ps-3 bg-white'>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                <div className='xl:col-span-3 md:col-span-6 col-span-full'>
                    <h3 className='text-xl font-bold left-7 text-orange'>TECH</h3>
                    <div className='text-base font-medium flex flex-col gap-3 mt-5 '>
                        {tech.map((item, index) => (
                            <p key={index} className='leading-10 rounded-lg ps-3 bg-white'>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                <div className='xl:col-span-6 col-span-12'>
                    <h3 className='text-xl font-bold left-7 text-default mb-4 uppercase'>
                        {t('coreValues.core.title')}
                    </h3>
                    <div className='flex flex-col gap-4'>
                        {core.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoreValues

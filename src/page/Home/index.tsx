/* eslint-disable import/no-unresolved */
import { useEffect } from 'react'
import banner from '~/assets/svg/bannerHome.svg'
import clock from '~/assets/svg/clock.svg'
import development from '~/assets/svg/development.svg'
import padlock from '~/assets/svg/padlock.svg'
import amico from '~/assets/svg/amico.svg'
import Banner from '~/component/customs/banner'
import LatestNews from './component/LatestNews'
import RegisterInformation from '~/component/customs/RegisterInformation'
import Partner from '~/component/customs/Partner'
import { useTranslation } from 'react-i18next'
import LazyImage from '~/component/customs/LazyImage'
import Button from '~/component/customs/Button'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { NavLink } from 'react-router-dom'

const INTRODUCTION_IMG = [clock, development, padlock, padlock]

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
}

function Home() {
    const { t } = useTranslation(['home'])

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start('visible')
        }
    }, [control, inView])

    const DATABANNER = {
        img: banner,
        title: '<p class="text-orange">BATTECH ERP</p>',
        content: t('banner.title'),
        description: t('banner.description')
    }
    const INTRODUCTION: string[] = t('introduction.listItem', { returnObjects: true })
    const LIST_DIFFERENCE: { title: string; content: string }[] = t('difference.listDifference', {
        returnObjects: true
    })

    return (
        <>
            <Banner {...DATABANNER} pb='pb-[50%]' sx='lg:-to-16 top-0' sxItem='lg:items-center xl:pb-32 lg:pb-20'>
                <div className='lg:mt-[52px] mt-8 lg:text-start text-center'>
                    <div className='flex lg:justify-start justify-center items-center'>
                        <Button>
                            <NavLink to='/contact'>{t('banner.btnTitle')}</NavLink>
                        </Button>
                    </div>
                </div>
            </Banner>
            <div
                className='mt-10 lg:bg-vector16 bg-no-repeat flex flex-col lg:gap-y-[200px] gap-10'
                style={{ backgroundPosition: '100% 5%' }}
            >
                <div className='xl:container w-full mx-auto px-4'>
                    <div className='flex flex-col lg:gap-y-36 gap-20'>
                        <div className='grid grid-cols-8 lg:gap-10 gap-y-10'>
                            <div className='lg:col-span-4 col-span-full '>
                                <div className='relative flex justify-center'>
                                    <motion.div
                                        className='lg:w-[540px] lg:h-[410px] md:w-1/2 md:h1/2 w-4/5 h-4w-4/5 object-center block'
                                        ref={ref}
                                        initial='hidden'
                                        variants={boxVariant}
                                        animate={control}
                                    >
                                        <LazyImage src={amico} />
                                    </motion.div>
                                </div>
                            </div>
                            <div className='lg:col-span-4 col-span-full lg:pl-10'>
                                <h3 className='text-3xl left-7 font-black not-italic text-default lg:text-start text-center mb-6'>
                                    {t('introduction.title')}
                                </h3>
                                <p className='text-base not-italic font-semibold leading-6 mb-6 text-justify'>
                                    {t('introduction.content')}
                                </p>
                                <div className='grid grid-cols-12 lg:gap-x-6 gap-3'>
                                    {INTRODUCTION.map((item, index) => (
                                        <div key={index} className='md:col-span-3 sm:col-span-6 col-span-full '>
                                            <div
                                                className='border border-solid border-transparent rounded-[16px]'
                                                style={{
                                                    background:
                                                        'linear-gradient(to bottom, #63E050C7, #1CAC52, #13AB59)',
                                                    backgroundClip: 'padding-box'
                                                }}
                                            >
                                                <div className='flex items-center flex-col justify-center shadow-baseShadow ml-[.8px] mr-[.8px] mt-[.7px] mb-[.9px] bg-white pt-[19px] pb-[7px] rounded-[15px]'>
                                                    <div className='w-10 h-10'>
                                                        <LazyImage src={INTRODUCTION_IMG[index]} />
                                                    </div>
                                                    <p
                                                        className='mt-5 h-[64px] text-base font-bold not-italic leading-6 text-center'
                                                        dangerouslySetInnerHTML={{ __html: item }}
                                                    ></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <h3
                                className='text-2xl text-default text-center left-7 font-bold not-italic mb-[76px] uppercase'
                                dangerouslySetInnerHTML={{ __html: t('difference.title') }}
                            ></h3>
                            <div className='grid grid-cols-4 md:gap-8 gap-x-4 gap-y-10'>
                                {LIST_DIFFERENCE.map((item, index) => (
                                    <div className='lg:col-span-1 sm:col-span-2 col-span-full' key={index}>
                                        <div className='relative pt-11 px-3 pb-4 bg-white shadow-baseShadow rounded-2xl h-full'>
                                            <h5
                                                className='text-xl leading-6 font-bold text-center mb-3'
                                                dangerouslySetInnerHTML={{ __html: item.title }}
                                            ></h5>
                                            <div className='text-base not-italic font-medium text-center'>
                                                {item.content}
                                            </div>
                                            <div className='absolute top-3 left-6 -translate-y-1/2'>
                                                <span className='text-[64px] leading-6 text-default font-bold not-italic '>
                                                    {`0${index + 1}`}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <LatestNews />
                    </div>
                </div>
                <RegisterInformation />
                <Partner />
            </div>
        </>
    )
}

export default Home

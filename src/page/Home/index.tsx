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

const INTRODUCTION_IMG = [clock, development, padlock, padlock]

function Home() {
    const { t } = useTranslation(['home'])

    const DATABANNER = {
        img: banner,
        title: 'BATTECH ERP',
        content: t('banner.title'),
        description: t('banner.description')
    }
    const INTRODUCTION: { title: string; title2: string }[] = t('introduction.listItem', { returnObjects: true })
    const LIST_DIFFERENCE: { title: string; title2: string; content: string }[] = t('difference.listDifference', {
        returnObjects: true
    })

    return (
        <div
            className='mt-header lg:bg-vector16 lg:bg-no-repeat flex flex-col lg:gap-24 gap-10'
            style={{ backgroundPosition: '100% 850px', backgroundSize: '847px 1113px' }}
        >
            <Banner {...DATABANNER}>
                <div className='lg:mt-[52px] mt-8 text-center'>
                    <button className='bg-default rounded-lg text-white px-6 py-[10px]'>
                        <span
                            className='lg:text-2xl md:text-xl text-lg font-bold not-italic'
                            style={{ textShadow: '4px 2px 15px rgba(0, 0, 0, 0.05)' }}
                        >
                            {t('banner.btnTitle')}
                        </span>
                    </button>
                </div>
            </Banner>

            <div className='xl:container w-full px-[1rem] mx-auto'>
                <div className='flex flex-col lg:gap-36 gap-20'>
                    <div className='grid grid-cols-12 lg:gap-8 gap-y-10'>
                        <div className='lg:col-span-5 col-span-full '>
                            <div className='relative flex justify-center'>
                                <p className='lg:pb-[65%] md:pb-[50%] pb-[100%]'></p>
                                <img className='absolute top-0  h-full object-center block' src={amico} alt='' />
                            </div>
                        </div>
                        <div className='lg:col-span-7 col-span-full'>
                            <h3 className='text-2xl left-7 font-bold not-italic text-default lg:text-start text-center mb-6'>
                                {t('introduction.title')}
                            </h3>
                            <p className='text-base not-italic font-medium leading-6 mb-6 text-justify'>
                                {t('introduction.content')}
                            </p>
                            <div className='grid grid-cols-12 gap-5 '>
                                {INTRODUCTION.map((item, index) => (
                                    <div key={index} className='md:col-span-3 sm:col-span-6 col-span-full'>
                                        <div className=' flex items-center flex-col shadow-baseShadow bg-white pt-[19px] pb-[7px] rounded-xl'>
                                            <img src={INTRODUCTION_IMG[index]} alt='' width='40' height='40' />
                                            <p className='mt-3 h-[64px] text-base font-semibold not-italic leading-6 text-center'>
                                                {item.title} <br /> {item.title2}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h3 className='text-2xl text-default text-center left-7 font-bold not-italic mb-[76px] '>
                            <span className='text-orange'>{t('difference.title.item')}</span>
                            {t('difference.title.item2')}
                        </h3>
                        <div className='grid grid-cols-12 md:gap-8 gap-x-4 gap-y-10'>
                            {LIST_DIFFERENCE.map((item, index) => (
                                <div className='lg:col-span-3 sm:col-span-6 col-span-12 ' key={index}>
                                    <div className='relative pt-11 px-3 pb-4 bg-white shadow-baseShadow rounded-2xl h-full'>
                                        <h5 className='text-xl leading-6 font-bold text-center mb-3'>
                                            <span className='block'>{item.title}</span>
                                            <span className='block'>{item.title2}</span>
                                        </h5>
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

                    {/* Latest News */}
                    <LatestNews />
                </div>
            </div>
            {/* Form receive information */}
            <RegisterInformation />
            <Partner />
        </div>
    )
}

export default Home

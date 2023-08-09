import vectorIntroduction from '~/assets/svg/vectorIntroduction.svg'
import { useTranslation } from 'react-i18next'

function IntroductionDetail() {
    const { t } = useTranslation(['introduction'])

    const introductionContent: string[] = t('introduction.content', { returnObjects: true })
    const vision: string[] = t('vision.content', { returnObjects: true })

    return (
        <div className='lg:container mx-auto p-4'>
            <div className='grid grid-cols-12 lg:gap-8 gap-y-8'>
                <div className='md:col-span-6 col-span-full flex lg:justify-start justify-center'>
                    <div className=' max-w-[500px] max-h-[500px]'>
                        <img
                            className='rounded-3xl w-full h-full object-cover'
                            src='https://s3-alpha-sig.figma.com/img/c3f0/c059/541ff2251e6a99cd07ef8ffbf829efe1?Expires=1691971200&Signature=UevNfG9lL5nbMzYKMNCTe4GGvvtInGzZY2pUDF~vUzUILMQZZML9~PVCiitc1je7103XIcsnrCkd5CYNFR~mz5IRMfqAgyykHOnZhOXpvdIUCZb244pbgP7jjahoAQ87mnrGO99D1WIINR7U9mjz2ZvOD4Qv8j4ylzN29xQTq~tLcMcZzzYW7uHmnNn5JFHDE3tlgt97Clhw-0p~HHVB~4sf8kFrq~~tzeoRsYjn9KvWHNiVKokFc2ypfU1Rm57wc77JnDL8TqOupUHm~tb5aPtL03a5Ecpwje9B46EquT9qXWmtyUyI2J6~UnBUIZFx-HbA34OE0S9lwrg6bfescg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            alt=''
                        />
                    </div>
                </div>
                <div className='md:col-span-6 col-span-full'>
                    <h3 className='uppercase text-default text-2xl font-bold leading-7 not-italic mt-3 '>
                        {t('introduction.title')}
                    </h3>
                    <div className='text-base font-medium not-italic flex flex-col gap-6 mt-3'>
                        {introductionContent.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 lg:gap-8 gap-y-8 mt-10'>
                <div className='md:col-span-6 col-span-full flex flex-col justify-center gap-4'>
                    <h3 className='uppercase text-default text-2xl font-bold leading-7 not-italic mt-3 '>
                        {t('vision.title')}
                    </h3>
                    <div className='text-base font-medium not-italic mt-3'>
                        <p className='font-bold'>{t('vision.description')}</p>
                        {vision.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className='md:col-span-6 col-span-full flex lg:justify-start justify-center'>
                    <div className='max-w-[500px] max-h-[500px]'>
                        <img className='rounded-3xl w-full h-full object-cover' src={vectorIntroduction} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IntroductionDetail

import vectorIntroduction from '~/assets/svg/vectorIntroduction.svg'
import { useTranslation } from 'react-i18next'
import LazyImage from '~/component/customs/LazyImage'

function IntroductionDetail() {
    const { t } = useTranslation(['introduction'])

    const introductionContent: string[] = t('introduction.content', { returnObjects: true })
    const vision: string[] = t('vision.content', { returnObjects: true })

    return (
        <div className='lg:container mx-auto p-4'>
            <div className='grid grid-cols-12 lg:gap-8 gap-y-8 md:gap-x-5'>
                <div className='md:col-span-6 col-span-full flex lg:justify-start justify-center'>
                    <div className=''>
                        <div className='rounded-3xl w-full h-full object-cover'>
                            <LazyImage
                                sx='rounded-3xl'
                                src='https://s3-alpha-sig.figma.com/img/c3f0/c059/541ff2251e6a99cd07ef8ffbf829efe1?Expires=1693180800&Signature=XkWKFh4ch7F508ZlZYV8d4Oi~-1TOAk5HxcbuAHdS08zhWDPuQmt~eilg0HqcVSJJZF1DDEYzzf4Tf5YfX1Ns5K3NbLBcTtrcKccsoaEOsozmPrc-soY0XYyQtQW5qbxjyWVKfeCPaLF1GkgRsEK0OwWrf~OhqjlRMNXJOmYLgJM6VU6vL0OiFiQmXblooKcNUeDzmwKuKK24SKYgaRJ4UE3kT5wdB227f~LTfmW0wqMxVLxumZP~6YQrhVMZoUryc9OV-9ddcmjTr1TjEciwcQ10Uz-yag9d7NH0Cvxy8hOU3AVV00ebsYcnzW4~d6RrFMZ01uBsMGphEuMoMkuKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            />
                        </div>
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
                        <div className='rounded-3xl w-full h-full object-cover'>
                            <LazyImage src={vectorIntroduction} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IntroductionDetail

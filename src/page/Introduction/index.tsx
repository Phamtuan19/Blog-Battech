import banner from '~/assets/svg/bannerIntroduction.svg'
import IntroductionDetail from './component/IntroductionDetail'
import CoreValues from './component/CoreValues'
import WorkingPrinciple from './component/WorkingPrinciple'
import RegisterInformation from '~/component/customs/RegisterInformation'
import Banner from '~/component/customs/banner'
import Partner from '~/component/customs/Partner'
import { useTranslation } from 'react-i18next'

function Introduction() {
    const { t } = useTranslation(['introduction'])
    return (
        <>
            <Banner
                img={banner}
                title={t('banner.title')}
                title2={t('banner.title2')}
                description={t('banner.description')}
                pb='pb-[45%] '
                sx='-top-12'
                sxItem='lg:-top-10'
            />
            <div
                className='xl:bg-vector17 xl:bg-no-repeat flex flex-col gap-14'
                style={{ backgroundPosition: '100% 5%' }}
            >
                <IntroductionDetail />
                <CoreValues />
                <WorkingPrinciple />
                <RegisterInformation />
                <Partner />
            </div>
        </>
    )
}

export default Introduction

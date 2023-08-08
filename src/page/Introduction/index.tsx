import banner from '~/assets/svg/bannerIntroduction.svg'
import IntroductionDetail from './component/IntroductionDetail'
import CoreValues from './component/CoreValues'
import WorkingPrinciple from './component/WorkingPrinciple'
import RegisterInformation from '~/component/customs/RegisterInformation'
import Banner from '~/component/customs/banner'
import Partner from '~/component/customs/Partner'

const DATABANNER = {
    img: banner,
    title: 'GIỚI THIỆU VỀ BATTECH',
    title2: 'BattECH',
    description:
        'Sau hơn một thập kỷ xây dựng và trưởng thành, BATTECH đã vươn mình trở thành doanh nghiệp đa lĩnh vực, có tốc độ phát triển thần tốc.'
}

function Introduction() {
    return (
        <div
            className='xl:bg-vector16 xl:bg-no-repeat flex flex-col gap-14'
            style={{ backgroundPosition: '100% 950px', backgroundSize: '642px 938px' }}
        >
            <Banner {...DATABANNER} />
            <IntroductionDetail />
            <CoreValues />
            <WorkingPrinciple />
            <RegisterInformation />
            <Partner />
        </div>
    )
}

export default Introduction

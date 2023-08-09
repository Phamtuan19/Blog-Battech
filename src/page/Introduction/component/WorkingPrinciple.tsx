import teamwork from '~/assets/svg/teamwork.svg'
import trust from '~/assets/svg/trust.svg'
import innovation from '~/assets/svg/innovation.svg'
import ethics from '~/assets/svg/ethics.svg'
import customers from '~/assets/svg/customers.svg'
import goals from '~/assets/svg/goals.svg'
import { useTranslation } from 'react-i18next'

const IMG = [teamwork, trust, innovation, ethics, customers, goals]

function WorkingPrinciple() {
    const { t } = useTranslation(['introduction'])

    const WORKINGPRINCIPLE: { title: string; content: string }[] = t('workingRelationship.list', {
        returnObjects: true
    })

    return (
        <div className='lg:container px-4 mx-auto'>
            <h2 className='text-2xl font-bold leading-7 not-italic text-center text-default mb-9'>TÔN CHỈ LÀM VIỆC</h2>
            <div className='grid grid-cols-12 lg:gap-9 gap-5'>
                {WORKINGPRINCIPLE.map((item, index) => (
                    <div key={index} className='lg:col-span-4 md:col-span-6 col-span-full '>
                        <div className='h-full flex items-center flex-col py-6 shadow-baseShadow rounded-3xl'>
                            <div className='w-[100px] h-[100px] rounded-full flex justify-center items-center shadow-baseShadow'>
                                <img src={IMG[index]} alt='' />
                            </div>
                            <div className='mt-5 px-5 text-center'>
                                <h4 className='text-xl font-bold not-italic'>{item.title}</h4>
                                <p className='text-base font-medium not-italic'>{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkingPrinciple

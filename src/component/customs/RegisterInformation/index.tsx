import vector17 from '~/assets/svg/viector17.svg'
import { useTranslation } from 'react-i18next'

function RegisterInformation() {
    const { t } = useTranslation(['home'])

    return (
        <div
            className='flex justify-center items-center lg:h-[520px] xl:h-[650px]  h-[400px]'
            style={{ backgroundImage: `url(${vector17})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
            <div className=''>
                <h3 className='lg:text-2xl text-lg text-white text-center left-7 font-bold not-italic lg:mb-10 mb-5 '>
                    {t('form.title')}
                </h3>
                <div className='mb-4 text-center'>
                    <input
                        type='text'
                        className='w-full max-w-[584px] rounded-xl px-3 lg:h-12 h-10 bg-white shadow-baseShadow'
                        placeholder={t('form.placeholder1')}
                    />
                </div>
                <div className='mb-10 text-center'>
                    <input
                        type='text'
                        className='w-full max-w-[584px] rounded-xl px-3 lg:h-12 h-10 bg-white shadow-baseShadow'
                        placeholder={t('form.placeholder2')}
                    />
                </div>

                <div className='text-center'>
                    <button className='py-[10px] px-3 text-center rounded-xl bg-default'>
                        <span className='lg:text-2xl text-lg font-semibold not-italic leading-normal text-white'>
                            {t('form.btnName')}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterInformation

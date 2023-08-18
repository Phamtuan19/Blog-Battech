import vector17 from '~/assets/svg/viector17.svg'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

interface TypeFormRegister {
    name: string
    email: string
}

function RegisterInformation() {
    const { t } = useTranslation(['home'])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TypeFormRegister>({})

    const handleSubmitForm = (data: TypeFormRegister): void => {
        console.log(data)
    }
    return (
        <div
            className=' flex justify-center items-center lg:h-[520px] xl:h-[650px]  h-[400px]'
            style={{ backgroundImage: `url(${vector17})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
        >
            <div className=''>
                <h3 className='lg:text-2xl text-lg text-white text-center left-7 font-bold not-italic lg:mb-10 mb-5 '>
                    {t('form.title')}
                </h3>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className='mb-4'>
                        <input
                            type='text'
                            className='w-full max-w-[584px] mb-1 rounded-xl px-5 lg:h-12 h-10 bg-white shadow-baseShadow outline-none'
                            placeholder={t('form.placeholder1')}
                            {...register('name', { required: 'Tên không được để trống' })}
                        />
                        {errors && <span className='text-red-700 px-3'>{errors?.name?.message}</span>}
                    </div>
                    <div className='mb-10'>
                        <input
                            type='text'
                            className='w-full max-w-[584px] mb-1 rounded-xl px-5 lg:h-12 h-10 bg-white shadow-baseShadow outline-none'
                            placeholder={t('form.placeholder2')}
                            {...register('email', {
                                required: 'Email không được để trống',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Email không đúng'
                                }
                            })}
                        />
                        {errors && <span className='text-red-700 px-3'>{errors?.email?.message}</span>}
                    </div>

                    <div className='text-center'>
                        <button type='submit' className='py-[10px] px-3 text-center rounded-xl bg-default'>
                            <span className='lg:text-2xl text-lg font-semibold not-italic leading-normal text-white'>
                                {t('form.btnName')}
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterInformation

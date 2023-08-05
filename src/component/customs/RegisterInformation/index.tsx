import vector17 from '~/assets/svg/viector17.svg'

function RegisterInformation() {
    return (
        <div className='relative bg-no-repeat min-h-[400px] flex justify-center items-center'>
            <img src={vector17} alt='' className='w-full min-h-[400px] object-cover' />
            <div className='absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h3 className='lg:text-2xl text-lg text-white text-center left-7 font-bold not-italic lg:mb-10 mb-5 '>
                    Đăng ký nhận thông tin mới nhất từ BATTECH
                </h3>
                <div className='mb-4 text-center'>
                    <input
                        type='text'
                        className='w-full max-w-[584px] rounded-xl px-3 lg:h-12 h-10 bg-white shadow-baseShadow'
                        placeholder='Nhập tên của bạn'
                    />
                </div>
                <div className='mb-10 text-center'>
                    <input
                        type='text'
                        className='w-full max-w-[584px] rounded-xl px-3 lg:h-12 h-10 bg-white shadow-baseShadow'
                        placeholder='Nhập tên của bạn'
                    />
                </div>

                <div className='text-center'>
                    <button className='py-[10px] px-3 text-center rounded-xl bg-default'>
                        <span className='lg:text-2xl text-lg font-semibold not-italic leading-normal text-white'>
                            Đăng ký nhận thông tin
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterInformation

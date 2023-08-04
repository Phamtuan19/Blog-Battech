import vector17 from '~/assets/viector17.svg'

function RegisterInformation() {
    return (
        <div
            className='mt-36 bg-no-repeat py-[183px] flex justify-center items-center'
            style={{ backgroundImage: `url(${vector17})`, backgroundPosition: '100% ' }}
        >
            <div className='h-[286px] '>
                <h3 className='text-2xl text-white text-center left-7 font-bold not-italic mb-10 '>
                    Đăng ký nhận thông tin mới nhất từ BATTECH
                </h3>
                <div className='mb-4'>
                    <input
                        type='text'
                        className='w-[584px] rounded-xl px-3 h-12 bg-white shadow-baseShadow'
                        placeholder='Nhập tên của bạn'
                    />
                </div>
                <div className='mb-10'>
                    <input
                        type='text'
                        className='w-[584px] rounded-xl px-3 h-12 bg-white shadow-baseShadow'
                        placeholder='Nhập tên của bạn'
                    />
                </div>

                <div className='text-center'>
                    <button className='py-[10px] px-3 text-center rounded-xl bg-default'>
                        <span className='text-2xl font-semibold not-italic leading-normal text-white'>
                            Đăng ký nhận thông tin
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterInformation

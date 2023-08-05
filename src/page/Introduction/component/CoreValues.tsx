import React from 'react'

function CoreValues() {
    return (
        <div className='xl:container bg-[#E9F9D6] ms-0 py-10 xl:rounded-e-3xl'>
            <div className='lg:container mx-auto px-4'>
                <div className='grid grid-cols-12 lg:gap-5 gap-y-10 gap-x-5'>
                    <div className='xl:col-span-3 md:col-span-6 col-span-full'>
                        <h3 className='text-xl font-bold left-7 text-orange'>BAT</h3>
                        <div className='text-base font-medium flex flex-col gap-3 mt-5 '>
                            <p className='leading-10 rounded-lg ps-3 bg-white'>Tận tâm với khách hàng</p>
                            <p className='leading-10 rounded-lg ps-3 bg-white'>Tận tụy với công việc</p>
                            <p className='leading-10 rounded-lg ps-3 bg-white'>Đoàn kết làm nên sức mạnh</p>
                        </div>
                    </div>

                    <div className='xl:col-span-3 md:col-span-6 col-span-full'>
                        <h3 className='text-xl font-bold left-7 text-orange'>TECH</h3>
                        <div className='text-base font-medium flex flex-col gap-3 mt-5 '>
                            <p className='leading-10 rounded-lg ps-3 bg-white'>“T” - Technology: Công nghệ</p>
                            <p className='leading-10 rounded-lg ps-3 bg-white'>“E” - Ecosystem: Hệ sinh thái</p>
                            <p className='leading-10 rounded-lg ps-3 bg-white'>“C” - Connect: Kết nối</p>
                            <p className='leading-10 rounded-lg ps-3 bg-white'>“H” - Happiness: Hạnh phúc</p>
                        </div>
                    </div>

                    <div className='xl:col-span-6 col-span-12'>
                        <h3 className='text-xl font-bold left-7 text-default mb-4'>GIÁ TRỊ CỐT LÕI</h3>
                        <div className='flex flex-col gap-4'>
                            <p>
                                BATTECH hay còn gọi là Công ty công nghệ BATTECH, là một công ty trực thuộc BATGROUP ra
                                đời trong giá trị cốt lõi của chữ “TÂM”
                            </p>
                            <p>
                                Công nghệ ngày càng phát triển, với sự ra đời của thế giới ảo metaverse giúp con người
                                gắn kết gần nhau hơn, BATTECH mong muốn sẽ mở ra không gian trực tuyến tương tác của
                                người dùng đa chiều hơn so với các công nghệ hiện tại, thay vì chỉ xem nội dung kỹ thuật
                                số, người dùng trong Metaverse sẽ có thể đắm mình trong không gian của thế giới kỹ thuật
                                số ảo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoreValues

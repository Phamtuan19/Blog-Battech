import vectorIntroduction from '~/assets/svg/vectorIntroduction.svg'

function IntroductionDetail() {
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
                        GIỚI THIỆU VỀ BATTECH
                    </h3>
                    <div className='text-base font-medium not-italic flex flex-col gap-6 mt-3'>
                        <p>
                            BATTECH được thành lập vào đầu năm 2009, trong bối cảnh nền kinh tế nước ta đang gặp nhiều
                            khó khăn, thách thức. Với khát vọng thành công và ý chí mạnh mẽ đội ngũ lãnh đạo trẻ,
                            BATTECH xác định lấy hoạt động đầu tư kinh doanh bất động sản, thi công cơ điện, phòng cháy
                            chữa cháy làm nòng cốt trong giai đoạn đầu.
                        </p>
                        <p>
                            Sau hơn một thập kỷ xây dựng và trưởng thành, BATTECH đã vươn mình trở thành doanh nghiệp đa
                            lĩnh vực, có tốc độ phát triển thần tốc.
                        </p>
                        <p>
                            Với số lượng 10 nhân viên từ lúc thành lập đến nay đã tăng lên con số hơn 300 nhân sự chính
                            thức và gần 400 nhân sự thời vụ tại các dự án trong và ngoài nước. Từng bước khẳng định tầm
                            vóc trên thương trường với hàng loạt công trình, dự án lớn tại Việt Nam, Lào, Cam-pu-chia,
                            Trung Quốc, cùng nhiều bạn hàng, đối tác cung ứng thiết bị từ Nhật, Đài Loan, Pháp, Đức,
                            Italy
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 lg:gap-8 gap-y-8 mt-10'>
                <div className='md:col-span-6 col-span-full flex flex-col justify-center gap-4'>
                    <h3 className='uppercase text-default text-2xl font-bold leading-7 not-italic mt-3 '>
                        TẦM NHÌN VÀ SỨ MỆNH
                    </h3>
                    <div className='text-base font-medium not-italic mt-3'>
                        <p className='font-bold'>"Vì một xã hội không có rào cản"</p>
                        <p>
                            Dựa vào công nghệ phát triển, nhu cầu sử dụng của tất cả mọi người. BATTECH mong muốn đem
                            tới mạng lưới thế giới ảo rộng lớn ra thị trường. Để cho tất cả mọi người có thể chia sẻ,
                            tâm sự và gắn kết trong không gian ảo, vượt qua mọi rào cản về vị trí địa lý, dịch bệnh.
                        </p>
                        <p>
                            Mục tiêu năm 2022-2023 công ty sẽ phát triển rộng lớn với quy mô 159 - 200 nhân sự. Ngoài
                            phát triển xây dựng phần mềm phòng họp ảo còn bắt tay vào làm các games 3D như golf, câu cá,
                            đua xe... Đưa công ty trở thành công ty công nghệ thuộc top đầu phát triển metaverse tại
                            Việt Nam.
                        </p>
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

import teamwork from '~/assets/svg/teamwork.svg'
import trust from '~/assets/svg/trust.svg'
import innovation from '~/assets/svg/innovation.svg'
import ethics from '~/assets/svg/ethics.svg'
import customers from '~/assets/svg/customers.svg'
import goals from '~/assets/svg/goals.svg'

const WORKINGPRINCIPLE = [
    {
        title: 'Teamwork',
        content:
            'Tinh thần đồng đội - mỗi cá nhân nhỏ tập hợp gắn kết, nâng đỡ đoàn kết vì mục tiêu chung xây dựng công ty phát triển vững mạnh.',
        img: teamwork
    },
    {
        title: 'Trust',
        content: 'Tin cậy - giữ chữ tín, giữ đúng lời hứa.',
        img: trust
    },
    {
        title: 'Innovation',
        content:
            'Sáng tạo, đổi mới - luôn học tập trao đổi cập nhật kiến thức mới để đưa vào ứng dụng trong công việc, luôn cải tiến áp dụng những công nghệ mới nhất để tạo ra sản phẩm tốt nhất.',
        img: innovation
    },
    {
        title: 'Ethics',
        content:
            'Đạo đức - trung thực khi phục vụ khách hàng, hiểu và tuân thủ các quy định của công ty, trách nhiệm với công việc, bình đẳng và tôn trọng mọi người.',
        img: ethics
    },
    {
        title: 'Customers',
        content:
            ':Khách hàng - đặt khách hàng là trung tâm phát triển, Battech luôn sẵn sàng lắng nghe và thay đổi theo chiều hướng tích cực để đưa ra sản phẩm phù hợp',
        img: customers
    },
    {
        title: 'Goals',
        content:
            'Mục tiêu - hoàn thành sản phẩm phòng họp ảo và đưa ra thị trường. Được các doanh nghiệp lớn tin cậy sử dụng rộng rãi.',
        img: goals
    }
]

function WorkingPrinciple() {
    return (
        <div className='lg:container px-4 mx-auto'>
            <h2 className='text-2xl font-bold leading-7 not-italic text-center text-default mb-9'>TÔN CHỈ LÀM VIỆC</h2>
            <div className='grid grid-cols-12 lg:gap-9 gap-5'>
                {WORKINGPRINCIPLE.map((item, index) => (
                    <div key={index} className='lg:col-span-4 md:col-span-6 col-span-full '>
                        <div className='h-full flex items-center flex-col py-6 shadow-baseShadow rounded-3xl'>
                            <div className='w-[100px] h-[100px] rounded-full flex justify-center items-center shadow-baseShadow'>
                                <img src={item.img} alt='' />
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

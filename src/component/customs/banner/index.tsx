import { useMediaQuery } from 'react-responsive'

interface TypeBanner {
    img: string
    title: string
    content: string
    description: string
    btnName: string
}

function Banner(props: TypeBanner) {
    const { img, title, content, description, btnName } = props

    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    return (
        <div className='relative w-full flex flex-col justify-end pb-[50%]'>
            <img src={img} alt='' className='absolute top-0 right-0' />
            {!isDesktopOrLaptop && (
                <div className='absolute left-0 top-0 w-full h-full'>
                    <div className='container mx-auto h-full flex justify-center items-center py-15'>
                        <div className='flex-1'>
                            <div className=''>
                                <h2 className='text-[40px] font-bold not-italic text-orange mb-7'>{title}</h2>
                                <p className='text-xl leading-7 font-bold not-italic text-default mb-6'>{content}</p>
                                <p className='text-base not-italic font-medium leading-6'>{description}</p>
                            </div>
                            <div className='mt-[52px]'>
                                <button className='bg-default rounded-lg text-white px-6 py-[10px]'>
                                    <span
                                        className='text-2xl font-bold not-italic'
                                        style={{ textShadow: '4px 2px 15px rgba(0, 0, 0, 0.05)' }}
                                    >
                                        {btnName}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='flex-1'></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Banner

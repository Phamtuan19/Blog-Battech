interface TypeBanner {
    img: string
    title: string
    content: string
    description: string
    btnName: string
}

function Banner(props: TypeBanner) {
    const { img, title, content, description, btnName } = props

    return (
        <div className='relative w-full flex justify-end '>
            <img src={img} alt='' className='' />
            <div className='absolute top-1/2 left-[10%] -translate-y-[60%]'>
                <div className='max-w-[590px]'>
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
        </div>
    )
}

export default Banner

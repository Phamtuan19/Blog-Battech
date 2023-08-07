interface TypeBanner {
    img: string
    title: string
    title2?: string
    content?: string
    description: string
    children?: React.ReactElement
}

function Banner(props: TypeBanner) {
    const { img, title, title2, content, description, children } = props

    return (
        <div className='relative w-full flex flex-col justify-end pb-[50%]'>
            <img src={img} alt='' className='absolute top-0 right-0' />
            {/* {!isDesktopOrLaptop && ( */}
            <div className='absolute left-0 top-0 w-full h-full'>
                <div className='lg:container p-4 mx-auto h-full flex items-center'>
                    <div className='flex-1'>
                        <div className=''>
                            <h2 className='text-3xl font-bold not-italic text-orange mb-7 uppercase'>
                                <span className='text-default me-2'>{title}</span>
                                {title2}
                            </h2>
                            <p className='text-xl leading-7 font-bold not-italic text-default mb-6'>{content}</p>
                            <p className='text-base not-italic font-medium leading-6'>{description}</p>
                        </div>
                        {children}
                    </div>
                    <div className='flex-1'></div>
                </div>
            </div>
            {/* )} */}
        </div>
    )
}

export default Banner

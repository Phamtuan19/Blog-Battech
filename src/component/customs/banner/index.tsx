interface TypeBanner {
    img: string
    title: string
    title2?: string
    content?: string
    description: string
    sx?: string
    children?: React.ReactElement
}

function Banner(props: TypeBanner) {
    const { img, title, title2, content, description, sx, children } = props

    return (
        <div className={`relative w-full flex flex-col justify-end ${sx || ''}`}>
            <p className='pb-[40%]'></p>
            <img src={img} alt='' className='absolute lg:-top-[12%] -top-[5%] right-0' />

            {/* {!isDesktopOrLaptop && ( */}
            <div className='lg:absolute lg:left-0 lg:top-0 w-full h-full lg:mt-0 md:mt-14 mt-5'>
                <div className='lg:container lg:mx-auto p-4 w-full h-full flex items-center'>
                    <div className='lg:flex-1 w-full'>
                        <div className='lg:text-start text-center'>
                            <h2 className='lg:text-3xl md:text-2xl text-xl font-bold not-italic text-orange lg:mb-7 mb-3 uppercase'>
                                {title}
                                <span className='text-default me-2'>{title2}</span>
                            </h2>
                            <p className='lg:text-xl text-lg leading-7 font-bold not-italic text-default lg:mb-6 mb-3'>
                                {content}
                            </p>
                            <p className='text-base not-italic font-medium leading-6 text-start'>{description}</p>
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

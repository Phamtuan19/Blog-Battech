import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

interface TypeDefaultLayout {
    children: React.ReactElement
}

function DefaultLayout(props: TypeDefaultLayout) {
    const { children } = props

    return (
        <div className='relative'>
            <Header />
            <div className='relative mt-header '>{children}</div>
            <Footer />

            {/* <div className='hidden fixed left-[2%] bottom-[20%] z-10 hove:flex flex-col gap-5 '>
                <div className='w-10 h-10 flex justify-center items-center bg-default rounded-full cursor-pointer shadow-baseShadow border border-solid border-white'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='16' viewBox='0 0 10 16' fill='none'>
                        <g clipPath='url(#clip0_1_2479)'>
                            <path
                                d='M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z'
                                fill='white'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_1_2479'>
                                <rect width='10' height='16' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='w-10 h-10 flex justify-center items-center bg-default rounded-full cursor-pointer shadow-baseShadow border border-solid border-white'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                        <g clipPath='url(#clip0_1_2472)'>
                            <path
                                d='M3.57143 16.0005H0.25V5.32202H3.57143V16.0005ZM1.89286 3.89345C0.857143 3.89345 0 3.00059 0 1.92916C0 0.464876 1.57143 -0.463696 2.85714 0.286304C3.46429 0.607733 3.82143 1.25059 3.82143 1.92916C3.82143 3.00059 2.96429 3.89345 1.89286 3.89345ZM15.9643 16.0005H12.6786V10.822C12.6786 9.57202 12.6429 8.00059 10.9286 8.00059C9.21429 8.00059 8.96429 9.32202 8.96429 10.7149V16.0005H5.64286V5.32202H8.82143V6.7863H8.85714C9.32143 5.96488 10.3929 5.07202 12 5.07202C15.3571 5.07202 16 7.2863 16 10.1434V16.0005H15.9643Z'
                                fill='white'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_1_2472'>
                                <rect width='16' height='16' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='w-10 h-10 flex justify-center items-center bg-default rounded-full cursor-pointer shadow-baseShadow border border-solid border-white'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='22' height='16' viewBox='0 0 22 16' fill='none'>
                        <g clipPath='url(#clip0_1_2465)'>
                            <path
                                d='M17.6932 1.3722C17.6932 1.3722 17.6932 1.3722 17.6603 1.3722C16.4134 0.781575 15.1009 0.387826 13.7557 0.158138C13.7228 0.125326 13.6901 0.158138 13.6901 0.158138C13.4932 0.486263 13.3291 0.8472 13.1978 1.17533C11.7213 0.945638 10.2447 0.945638 8.76816 1.17533C8.63691 0.8472 8.47284 0.486263 8.27597 0.158138C8.27597 0.158138 8.24316 0.125326 8.21034 0.158138C6.86503 0.387826 5.55253 0.781575 4.30566 1.3722C4.27284 1.3722 4.27284 1.3722 4.27284 1.3722C1.77909 5.11283 1.09003 8.75502 1.41815 12.3644C1.41815 12.3644 1.41815 12.3972 1.45097 12.3972C2.89472 13.48 4.53534 14.3003 6.27441 14.8253C6.27441 14.8582 6.30722 14.8253 6.34003 14.8253C6.70097 14.3003 7.02909 13.7753 7.32441 13.2175C7.32441 13.1847 7.32441 13.1519 7.29159 13.1191C6.76659 12.9222 6.24159 12.6925 5.78222 12.3972C5.74941 12.3972 5.71659 12.3316 5.78222 12.2988C5.88066 12.2332 5.97909 12.1675 6.07753 12.0691C6.07753 12.0691 6.11034 12.0691 6.14316 12.0691C9.29316 13.5128 12.7057 13.5128 15.8228 12.0691C15.8557 12.0691 15.8557 12.0691 15.8884 12.0691C15.9869 12.1675 16.0853 12.2332 16.1838 12.2988C16.2166 12.3316 16.2166 12.3972 16.1838 12.3972C15.6916 12.6925 15.1994 12.9222 14.6744 13.1191C14.6416 13.1519 14.6416 13.1847 14.6416 13.2175C14.9369 13.7753 15.2651 14.3003 15.6259 14.8253C15.6588 14.8253 15.6588 14.8582 15.6916 14.8253C17.4307 14.3003 19.0713 13.48 20.5151 12.3972C20.5478 12.3972 20.5478 12.3644 20.5478 12.3644C20.9416 8.1972 19.8588 4.58783 17.6932 1.3722ZM7.78378 10.166C6.83222 10.166 6.04472 9.28002 6.04472 8.23002C6.04472 7.1472 6.83222 6.29408 7.78378 6.29408C8.76816 6.29408 9.52285 7.1472 9.52285 8.23002C9.52285 9.28002 8.73534 10.166 7.78378 10.166ZM14.1822 10.166C13.2307 10.166 12.4759 9.28002 12.4759 8.23002C12.4759 7.1472 13.2307 6.29408 14.1822 6.29408C15.1666 6.29408 15.9541 7.1472 15.9213 8.23002C15.9213 9.28002 15.1666 10.166 14.1822 10.166Z'
                                fill='white'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_1_2465'>
                                <rect width='21' height='15.75' fill='white' transform='translate(0.5 0.125)' />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div> */}
        </div>
    )
}

export default DefaultLayout

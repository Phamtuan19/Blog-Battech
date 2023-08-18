import React from 'react'

interface TypeButton {
    type?: 'button' | 'submit'
    dislabel?: boolean
    background?: string
    hover?: string
    sx?: string
    onClick?: () => void
    children: React.ReactElement | React.ReactNode
}

function Button(props: TypeButton) {
    const { type, dislabel, background, hover, sx, onClick, children } = props

    const bg = background ? `bg-[${background}]` : 'bg-default'
    const propsHoverBg = hover ? `hover:bg-[${hover}]` : `hover:bg-hoverDefault`
    const btnType = type ? type : 'button'

    return (
        <button
            type={btnType}
            disabled={dislabel || false}
            className={`flex justify-center items-center py-[8px] px-[18px] text-xl font-normal text-white rounded-xl ${bg} ${propsHoverBg} ${
                sx || ''
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
export default Button

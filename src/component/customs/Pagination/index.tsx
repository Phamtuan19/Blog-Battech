/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactPaginate from 'react-paginate'

interface PaginationType {
    pageCount: number
    page: number
    methodCallApi?: () => void
    setPage: React.Dispatch<React.SetStateAction<number>>
}

function Pagination(props: PaginationType) {
    const { pageCount, page, setPage } = props

    const handlePageChange = ({ selected }: { selected: number }) => {
        setPage(selected + 1)
    }

    return (
        <ReactPaginate
            pageCount={pageCount}
            marginPagesDisplayed={3}
            previousLabel={
                <button className='flex justify-center items-center' disabled={page <= 1}>
                    <Left color={page === 1 ? '#7A7A7A' : '#008345'} />
                </button>
            }
            nextLabel={
                <button className='flex justify-center items-center' disabled={page >= pageCount}>
                    <Right color={page === pageCount ? '#7A7A7A' : '#008345'} />
                </button>
            }
            className='flex gap-2'
            pageLinkClassName='bg-[#7A7A7A] py-[6px] px-[0.55rem] rounded-[8px] text-white'
            activeLinkClassName='bg-default'
            nextClassName='text-default'
            onPageChange={handlePageChange}
        />
    )
}

const Left = (props: { color?: string }) => {
    const { color } = props

    return (
        <div className='cursor-pointer w-6 h-6 flex justify-center items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill={color}>
                <g clipPath='url(#clip0_1_517)'>
                    <path d='M15.41 16.59L10.83 12L15.41 7.41L14 6L7.99997 12L14 18L15.41 16.59Z' fill={color} />
                </g>
                <defs>
                    <clipPath id='clip0_1_517'>
                        <rect width='24' height='24' fill='white' transform='matrix(-1 0 0 1 24 0)' />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

const Right = (props: { color?: string }) => {
    const { color } = props
    return (
        <div className='cursor-pointer w-6 h-6 flex justify-center items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill={color}>
                <g clipPath='url(#clip0_1_516)'>
                    <path d='M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z' fill={color} />
                </g>
                <defs>
                    <clipPath id='clip0_1_516'>
                        <rect width='24' height='24' fill={color} />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default React.memo(Pagination)

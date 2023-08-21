/* eslint-disable react-refresh/only-export-components */
import React from 'react'

interface TypeModal {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    content: string
}

function Modal(props: TypeModal) {
    const { title, content, open, setOpen } = props

    return (
        <>
            {open ? (
                <div className='fixed top-0 left-0 w-full h-[100vh] z-[99999] bg-[#00000080] overflow-hidden'>
                    <div className='h-full flex justify-center items-center'>
                        <div className='w-[500px] bg-white rounded-xl'>
                            <div className='p-3 mb-3'>
                                <h1 className='text-2xl font-bold'>{title}</h1>
                            </div>
                            <div className='p-3 mb-3'>
                                <p>{content}</p>
                            </div>
                            <div className='mb-3 flex justify-end px-5'>
                                <button
                                    className='px-4 py-2 bg-default text-white font-bold rounded-lg'
                                    onClick={() => setOpen(false)}
                                >
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default React.memo(Modal)

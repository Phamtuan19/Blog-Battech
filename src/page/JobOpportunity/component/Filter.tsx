/* eslint-disable react-refresh/only-export-components */
import React from 'react'

interface FilterType {
    options: { id: number; name: string }[]
    check: number
    setCheck: React.Dispatch<React.SetStateAction<number>>
}

function Filter(props: FilterType) {
    const { options, check, setCheck } = props
    const handleChange = (val: number) => {
        setCheck(val)
    }

    return (
        <div className='mt-2 px-4'>
            <div className='flex items-center gap-2'>
                <input
                    type='radio'
                    id={`job_all_`}
                    checked={check === 0 ? true : false}
                    onChange={() => handleChange(0)}
                />
                <label htmlFor={`job_all_`} className='text-base font-normal not-italic'>
                    Tất cả
                </label>
            </div>
            {options?.map((option: { id: number; name: string }) => (
                <div key={option.id} className='flex items-center gap-2'>
                    <input
                        type='radio'
                        id={`job_${option.name}`}
                        checked={check === option.id ? true : false}
                        onChange={() => handleChange(option.id)}
                    />
                    <label htmlFor={`job_${option.name}`} className='text-base font-normal not-italic'>
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default React.memo(Filter)

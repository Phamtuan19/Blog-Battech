/* eslint-disable react-refresh/only-export-components */
import React, { Dispatch, SetStateAction } from 'react'

interface FilterType {
    options: { _id: string; name: string }[]
    jobAll: string
    check: string
    setCheck: Dispatch<SetStateAction<string>>
}

function Filter(props: FilterType) {
    const { options, jobAll, check, setCheck } = props
    const handleChange = (val: string) => {
        setCheck(val)
    }

    return (
        <div className='mt-2 px-4'>
            <div className='flex items-center gap-2'>
                <input
                    type='radio'
                    id={`job_all_${jobAll}`}
                    checked={check === '' ? true : false}
                    onChange={() => handleChange('')}
                />
                <label htmlFor={`job_all_${jobAll}`} className='text-base font-normal not-italic'>
                    Tất cả
                </label>
            </div>
            {options?.map((option: { _id: string; name: string }) => (
                <div key={option._id} className='flex items-center gap-2'>
                    <input
                        type='radio'
                        id={`job_${option.name}`}
                        checked={check === option._id ? true : false}
                        onChange={() => handleChange(option._id)}
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

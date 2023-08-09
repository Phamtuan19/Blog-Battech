import React, { useState } from 'react'

interface TypeFilter {
    options: { id: string; name: string }[]
}

function Filter(props: TypeFilter) {
    const { options } = props

    const [check, setCheck] = useState<string>('1')

    const handleChange = (val: string) => {
        setCheck(val)
    }

    return (
        <div className='mt-2 px-4'>
            {options.map((option) => (
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

export default Filter

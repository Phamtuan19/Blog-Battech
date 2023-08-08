import React from 'react'

import userBlue from '~/assets/svg/userBlue.svg'
import calendar from '~/assets/svg/calendar-2.svg'
import { Link } from 'react-router-dom'

function NewItem() {
    return (
        <div className='grid grid-cols-3 gap-3 bg-white rounded-xl shadow-baseShadow overflow-hidden'>
            <div className='relative'>
                <div className=''>
                    <p className='pb-[60%]'></p>
                    <img
                        className=' absolute top-0 left-0 w-full h-full object-cover'
                        src='https://s3-alpha-sig.figma.com/img/30bc/a296/3c37800e495b48ebc1273e6e236b5952?Expires=1692576000&Signature=Ep0-BspVwiHi-FD8sRiCeQ3bgtUoutk80ebo3carXE0kaNYjjC~kzbNqpeMBLrcWEVJ0a9r3V9WlICvuhk8KuAwJmfA2h4YtYM0igfe-gQc83zmvm4XrkfT0sjt0nYfyRL7CNBUdKVtVlR94yPTjljbghhIqy4t45PS9hiAN5-qOh-Bq4ure2z9-XcDFEGkRFbqZ3liA6aBBRhQuFvUernEyRpc6jYmPXkzzNr9kGnqXrpZpBUmIpKtEHOjiTiGGlNvmdIEqop4e9XYR5IYTjjz9N-2iXkurb1wtlwYP8K2RLzWWoJUjCHS6x83ZybVTMnROSlvKJN6Qrdm0AP-vrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                        alt=''
                    />
                </div>
            </div>
            <div className='col-span-2 py-3 pe-3'>
                <div className='flex flex-col justify-between h-full'>
                    <Link
                        to=''
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                    >
                        Chuyển đổi số ngành truyền thông đại chúng: xu hướng mới trong lĩnh vực công nghệ số
                    </Link>

                    <div className='mt-2 flex items-center justify-between'>
                        <div className=' flex items-center'>
                            <img src={userBlue} alt='' />
                            <p className='text-sm not-italic ms-2'>Le link</p>
                        </div>
                        <div className=' flex items-center text-[#929292]'>
                            <img src={calendar} alt='' />
                            <p className='text-sm not-italic ms-2'>May 4th 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewItem

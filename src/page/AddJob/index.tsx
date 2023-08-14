/* eslint-disable no-empty */
/* eslint-disable react-hooks/exhaustive-deps */
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { useForm } from 'react-hook-form'
import axios from 'axios'
import useRequest from '@ahooksjs/use-request'
import { toast } from 'react-toastify'

interface FormAddJob {
    name: string
    technology: string
    addressId: string
    content: string
    quantity: number
    salaryLevel: string
    workGroupId: string
}

function AddJob() {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormAddJob>()

    const { data: workGroups } = useRequest(async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/workGroup')
            return res.data.data
        } catch (error) {}
    })

    const { data: address } = useRequest(async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/address')
            return res.data.data
        } catch (error) {}
    })

    const handleSubmitForm = async (data: FormAddJob) => {
        try {
            const res = await axios.post('http://localhost:3001/api/job/create', data)
            toast.success('Thêm bài viết thành công!')
            reset()
            setValue('content', '')
            return res.data.data
        } catch (error) {}
    }

    return (
        <div className='my-10 pt-10 px-4'>
            <h1 className='text-3xl font-bold'>Thêm Công Việc Mới</h1>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className='grid grid-cols-12'>
                    <div className='col-span-8'>
                        <div className='mb-3 mt-8'>
                            <CKEditor
                                editor={ClassicEditor}
                                onChange={(event, editor) => {
                                    const data = editor.getData()
                                    console.log({ event, editor, data })
                                    setValue('content', data)
                                }}
                            />
                            {errors?.content && <p className='text-red-500'>{errors?.content.message}</p>}
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='pl-4'>
                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block font-semibold'>
                                    Loại công việc
                                </label>
                                <select
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('workGroupId', { required: 'Tên bài viết không được để trống' })}
                                >
                                    <option value=''>--- chọn nhóm công việc ---</option>
                                    {workGroups?.map((item: { _id: string; name: string }) => (
                                        <option key={item._id} value={item._id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {errors?.workGroupId && <p className='text-red-500'>{errors?.workGroupId.message}</p>}
                            </div>

                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block font-semibold'>
                                    Tên công việc
                                </label>
                                <input
                                    type='text'
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('name', { required: 'Tên công việc không được để trống' })}
                                />
                                {errors?.name && <p className='text-red-500'>{errors?.name.message}</p>}
                            </div>

                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block'>
                                    Công nghệ yêu cầu
                                </label>
                                <input
                                    type='text'
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('technology', { required: 'Yêu cầu công nghệ không được để trống' })}
                                />
                                {errors?.technology && <p className='text-red-500'>{errors?.technology.message}</p>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block font-semibold'>
                                    Địa chỉ làm việc
                                </label>
                                <select
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('addressId', { required: 'Tên bài viết không được để trống' })}
                                >
                                    <option value=''>--- chọn địa chỉ làm việc ---</option>
                                    {address?.map((item: { _id: string; name: string }) => (
                                        <option key={item._id} value={item._id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {errors?.addressId && <p className='text-red-500'>{errors?.addressId.message}</p>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block'>
                                    Mức lương
                                </label>
                                <input
                                    type='text'
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('salaryLevel', { required: 'Mức lương không được để trống' })}
                                />
                                {errors?.salaryLevel && <p className='text-red-500'>{errors?.salaryLevel.message}</p>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block'>
                                    Số lượng
                                </label>
                                <input
                                    type='text'
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('quantity', { required: 'Số lượng tuyển không được để trống' })}
                                />
                                {errors?.quantity && <p className='text-red-500'>{errors?.quantity.message}</p>}
                            </div>

                            <div className='text-end'>
                                <button type='submit' className='bg-default py-2 px-5 text-white rounded-lg'>
                                    Thêm mới
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddJob

/* eslint-disable react-hooks/exhaustive-deps */
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import './style.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import useRequest from '@ahooksjs/use-request'

interface TypeFormPost {
    title: string
    articleTypeId: string
    description: string
    image: string
    content: string
}

function AddPosts() {
    const {
        watch,
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue
    } = useForm<TypeFormPost>()
    const { data: articleType, run } = useRequest<{ _id: string; name: string }[] | []>(async () => {
        const res = await axios.get('http://localhost:3001/api/articleType')
        return res.data.data
    })
    const iamgeUrl = watch('image')

    const handleSubmitForm = async (data: TypeFormPost) => {
        try {
            await axios.post('http://localhost:3001/api/posts/create', data)
            toast.success('Thêm bài viết thành công!')
            reset()
        } catch (error) {
            toast.error('Đã có lỗi xảy ra!')
        }
    }

    useEffect(() => {
        run()
    }, [])

    return (
        <div className='my-10 pt-10 px-4'>
            <h1 className='text-3xl font-bold'>Thêm bài viết</h1>
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
                                    Loại bài viết
                                </label>
                                <select
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('articleTypeId', { required: 'Tên bài viết không được để trống' })}
                                >
                                    <option value=''>--- chọn loại bài viết ---</option>
                                    {articleType &&
                                        articleType.map((item) => (
                                            <option key={item._id} value={item._id}>
                                                {item.name}
                                            </option>
                                        ))}
                                </select>
                                {errors?.articleTypeId && (
                                    <p className='text-red-500'>{errors?.articleTypeId.message}</p>
                                )}
                            </div>

                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block font-semibold'>
                                    Tên bài viết
                                </label>
                                <input
                                    type='text'
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('title', { required: 'Tên bài viết không được để trống' })}
                                />
                                {errors?.title && <p className='text-red-500'>{errors?.title.message}</p>}
                            </div>

                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block'>
                                    Mô tả bài viết
                                </label>
                                <input
                                    type='text'
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    {...register('description', { required: 'Mô tả bài viết không được để trống' })}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor='' className='mb-2 block'>
                                    Hình ảnh
                                </label>
                                <input
                                    type='text'
                                    className='border border-solid outline-none h-[42px] px-3 w-full rounded-lg'
                                    placeholder='nhập vào link hình ảnh'
                                    {...register('image', { required: 'Hình ảnh bài viết không được để trống' })}
                                />
                                {errors?.image && <p className='text-red-500'>{errors?.image.message}</p>}

                                <div className='w-1/2 mt-5 h-40'>
                                    <img src={iamgeUrl} alt='' className='w-full h-full ' />
                                </div>
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

export default AddPosts

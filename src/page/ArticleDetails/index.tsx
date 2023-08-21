/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react'
import useRequest from '@ahooksjs/use-request'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import PostNews from './component/PostNews'
import RelatedNews from './component/RelatedNews'
import { PostType } from '~/types/post.type'

function ArticleDetails() {
    const { id } = useParams()

    const { loading, data, run }: { loading: boolean; data: PostType; run: () => void } = useRequest(async () => {
        const res = await axios.get('http://localhost:3001/api/posts/' + id)
        return res.data.data
    })

    useEffect(() => {
        run()
    }, [id])

    return (
        <div className='m-h-[500px]'>
            {!loading && (
                <div className='lg:container p-4 mx-auto mt-header '>
                    <div className='flex flex-wrap text-base font-medium not-italic gap-2 pt-6 mb-6'>
                        <Link to='/news' className='text-default'>
                            Tin tức /{' '}
                        </Link>
                        <Link to='' className='text-default'>
                            Phát triển phần mềm /{' '}
                        </Link>
                        <p className='text-[#929292]'>{data?.title}</p>
                    </div>
                    <div className='w-full grid grid-cols-12 md:gap-8 gap-y-8'>
                        <div className='lg:col-span-8 col-span-full'>
                            <div className='mb-8'>
                                <h1 className='md:text-[32px] text-2xl md:leading-9 leading-7 font-bold not-italic'>
                                    {data?.title}
                                </h1>
                            </div>
                            <div className='' dangerouslySetInnerHTML={{ __html: data?.content }}></div>
                        </div>
                        <div className='lg:col-span-4 col-span-full'>
                            <PostNews />
                        </div>
                    </div>
                    {/* line */}
                    <div className='border border-solid border-default my-16'></div>

                    {/*  */}
                    <div className=''>
                        <RelatedNews articleTypeId={data.articleTypeId} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ArticleDetails

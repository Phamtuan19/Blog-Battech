/* eslint-disable react-hooks/exhaustive-deps */

import { NavLink } from 'react-router-dom'
import NewItem from '~/component/customs/NewItem'
import useRequest from '@ahooksjs/use-request'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ArticleType } from '~/types/article.type'
import { PostType } from '~/types/post.type'
import Pagination from '~/component/customs/Pagination'

function Tabs() {
    const [page, setPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)
    const [queryType, setQueryType] = useState<string>('64d48880eaf1945fc72fde97')

    const { data: articleType } = useRequest(async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/articleType')
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    })

    const {
        loading: loadingPost,
        data: postList,
        run: runPost
    } = useRequest(async (id, page) => {
        try {
            const res = await axios.get(`http://localhost:3001/api/posts/news/${id}?page=${page}`)
            setPageCount(res.data.pageCount)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    })

    useEffect(() => {
        runPost(queryType, page)
    }, [queryType, page])

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex gap-8 overflow-x-auto scroll-0'>
                {articleType?.map((item: ArticleType) => (
                    <div
                        key={item._id}
                        className='lg:text-xl text-lg leading-7 font-bold not-italic uppercase w-auto whitespace-nowrap'
                        onClick={() => setQueryType(item._id)}
                    >
                        <NavLink
                            to={`?q=${item.name}`}
                            className={`${queryType === item._id ? 'text-default' : 'text-[#7A7A7A]'} block`}
                        >
                            {item.name}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-12 gap-x-3 gap-y-5 '>
                {!loadingPost &&
                    postList.map((item: PostType) => (
                        <div key={item._id} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full'>
                            <NewItem
                                img={item.image}
                                useName='Le Link'
                                date={item.createdAt.toString().slice(0, 10)}
                                title={item.title}
                                description={item.description}
                                _id={item._id}
                            />
                        </div>
                    ))}
                <div className='col-span-12 mt-10 mb-10 flex justify-center items-center'>
                    <Pagination pageCount={pageCount || 1} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    )
}

export default Tabs

/* eslint-disable no-empty */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from 'react-router-dom'
import NewItem from '~/component/customs/NewItem'
import useRequest from '@ahooksjs/use-request'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ArticleType } from '~/types/article.type'
import { PostType } from '~/types/post.type'
import Pagination from '~/component/customs/Pagination'
import { BASE_URL } from '~/config/env'

function Tabs() {
    const [page, setPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)
    const [queryType, setQueryType] = useState<number>(1)

    const { data: articleType } = useRequest(async () => {
        try {
            const res = await axios.get(BASE_URL + 'articletypes')
            return res.data
        } catch (error) {}
    })

    const {
        loading: loadingPost,
        data: postList,
        run: runPost
    } = useRequest(async (articleTypeId, page) => {
        try {
            const res = await axios.get(BASE_URL + `posts?articleTypeId=${articleTypeId}&_page=${page}&_limit=4`)

            const resType = await axios.get(BASE_URL + `posts?articleTypeId=${articleTypeId}`)
            setPageCount(Math.ceil(resType.data.length / 4))

            return res.data
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
                {articleType?.map((item: ArticleType) => {
                    return (
                        <div
                            key={item.id}
                            className='lg:text-xl text-lg leading-7 font-bold not-italic uppercase w-auto whitespace-nowrap'
                            onClick={() => setQueryType(item.id)}
                        >
                            <NavLink
                                to={`?q=${item.name}`}
                                className={`${queryType === item.id ? 'text-default' : 'text-[#7A7A7A]'} block`}
                            >
                                {item.name}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            <div className='grid grid-cols-12 gap-x-3 gap-y-5 '>
                {!loadingPost && (
                    <>
                        {postList.map((item: PostType) => (
                            <div key={item.id} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full'>
                                <NewItem
                                    img={item.image}
                                    useName='Le Link'
                                    date={item.createdAt.toString().slice(0, 10)}
                                    title={item.title}
                                    description={item.description}
                                    id={item.id}
                                />
                            </div>
                        ))}

                        <div className='col-span-12 mt-10 mb-10 flex justify-center items-center'>
                            <Pagination pageCount={pageCount || 1} page={page} setPage={setPage} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default React.memo(Tabs)

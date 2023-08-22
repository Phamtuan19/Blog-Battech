/* eslint-disable import/no-unresolved */
import useRequest from '@ahooksjs/use-request'
import axios from 'axios'

import NewItemArticleDetail from './NewItem'
import { PostType } from '~/types/post.type'
import { BASE_URL } from '~/config/env'

function PostNews() {
    const { data: postNews } = useRequest(async () => {
        try {
            const res = await axios.get(BASE_URL + `posts?_limit=5`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <div>
            <h1 className='text-xl font-bold not-italic'>Tin tức mới</h1>
            <div className='grid grid-cols-12 mt-3 gap-4'>
                {postNews?.length > 0 &&
                    postNews?.map((item: PostType) => (
                        <div key={item.id} className='lg:col-span-12 col-span-full'>
                            <NewItemArticleDetail {...item} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default PostNews

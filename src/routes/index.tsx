import { useRoutes } from 'react-router-dom'
import DefaultLayout from '~/component/DefaultLayout'
import ArticleDetails from '~/page/ArticleDetails'
import Home from '~/page/Home'
import Introduction from '~/page/Introduction'
import News from '~/page/News'

const routers = [
    {
        path: '/',
        element: (
            <DefaultLayout>
                <Home />
            </DefaultLayout>
        )
    },
    {
        path: '/introduction',
        element: (
            <DefaultLayout>
                <Introduction />
            </DefaultLayout>
        )
    },
    {
        path: '/news',
        element: (
            <DefaultLayout>
                <News />
            </DefaultLayout>
        )
    },
    {
        path: '/article-detail/:id',
        element: (
            <DefaultLayout>
                <ArticleDetails />
            </DefaultLayout>
        )
    }
]

export default function Routers() {
    return useRoutes(routers)
}

import { Outlet, useRoutes } from 'react-router-dom'
import Contact from '~/page/Contact'
import DefaultLayout from '~/component/DefaultLayout'
import ArticleDetails from '~/page/ArticleDetails'
import Home from '~/page/Home'
import Introduction from '~/page/Introduction'
import JobDetail from '~/page/JobDetail'
import JobOpportunity from '~/page/JobOpportunity'
import News from '~/page/News'
import AddPosts from '~/page/AddPosts'

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
        path: '/article/:id',
        element: (
            <DefaultLayout>
                <ArticleDetails />
            </DefaultLayout>
        )
    },
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                path: 'job',
                element: (
                    <DefaultLayout>
                        <JobOpportunity />
                    </DefaultLayout>
                )
            },
            {
                path: 'job/:id',
                element: (
                    <DefaultLayout>
                        <JobDetail />
                    </DefaultLayout>
                )
            }
        ]
    },
    {
        path: '/contact',
        element: (
            <DefaultLayout>
                <Contact />
            </DefaultLayout>
        )
    },
    {
        path: 'posts/create',
        element: (
            <DefaultLayout>
                <AddPosts />
            </DefaultLayout>
        )
    }
]

export default function Routers() {
    return useRoutes(routers)
}

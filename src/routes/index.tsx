import { Outlet, useRoutes } from 'react-router-dom'
import Contact from '~/page/Contact'
import DefaultLayout from '~/component/DefaultLayout'
import ArticleDetails from '~/page/ArticleDetails'
import Home from '~/page/Home'
import Introduction from '~/page/Introduction'
import JobOpportunity from '~/page/JobOpportunity'
import News from '~/page/News'
import AddPosts from '~/page/AddPosts'
import AddJob from '~/page/AddJob'
import JobDetail from '~/page/JobDetail'

const routes = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'introduction',
                element: <Introduction />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'article/:id',
                element: <ArticleDetails />
            },
            {
                path: '/',
                element: <Outlet />,
                children: [
                    {
                        path: 'job/',
                        element: <Outlet />,
                        children: [
                            {
                                index: true,
                                element: <JobOpportunity />
                            },
                            {
                                path: '/job/:id',
                                element: <JobDetail />
                            },
                            {
                                path: 'create',
                                element: <AddJob />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'posts/create',
                element: <AddPosts />
            }
        ]
    }
]

export default function Routers() {
    return useRoutes(routes)
}

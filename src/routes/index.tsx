/* eslint-disable import/no-unresolved */
import { lazy } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import DefaultLayout from '~/component/DefaultLayout'

// import Contact from '~/page/Contact'
// import ArticleDetails from '~/page/ArticleDetails'
// import Home from '~/page/Home'
// import Introduction from '~/page/Introduction'
// import JobOpportunity from '~/page/JobOpportunity'
// import News from '~/page/News'
// import AddPosts from '~/page/AddPosts'
// import AddJob from '~/page/AddJob'
// import JobDetail from '~/page/JobDetail'

import ChatSocialNetwork from '~/component/DefaultLayout/component/ChatSocialNetwork'
import Loadable from '~/hook/Loadable'

const Home = Loadable(lazy(() => import('~/page/Home')))
const Contact = Loadable(lazy(() => import('~/page/Contact')))
const ArticleDetails = Loadable(lazy(() => import('~/page/ArticleDetails')))
const JobOpportunity = Loadable(lazy(() => import('~/page/JobOpportunity')))
const News = Loadable(lazy(() => import('~/page/News')))
const AddPosts = Loadable(lazy(() => import('~/page/AddPosts')))
const AddJob = Loadable(lazy(() => import('~/page/AddJob')))
const JobDetail = Loadable(lazy(() => import('~/page/JobDetail')))
const Introduction = Loadable(lazy(() => import('~/page/Introduction')))

const routes = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: (
                    <>
                        <Home />
                        <ChatSocialNetwork />
                    </>
                )
            },
            {
                path: 'introduction',
                element: (
                    <>
                        <Introduction />
                        <ChatSocialNetwork />
                    </>
                )
            },
            {
                path: 'news',
                children: [
                    {
                        index: true,
                        element: (
                            <>
                                <News />
                                <ChatSocialNetwork />
                            </>
                        )
                    },
                    {
                        path: '/news/:id',
                        element: <ArticleDetails />
                    }
                ]
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
                element: (
                    <>
                        <Contact />
                        <ChatSocialNetwork />
                    </>
                )
            },
            {
                path: 'posts/create',
                element: <AddPosts />
            }
        ]
    },
    {
        path: '*',
        element: <h1 className='text-center text-3xl'>404</h1>
    }
]

export default function Routers() {
    return useRoutes(routes)
}

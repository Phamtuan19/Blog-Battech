import { useRoutes } from 'react-router-dom'
import DefaultLayout from '~/component/DefaultLayout'
import Home from '~/page/Home'
import Introduction from '~/page/Introduction'

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
    }
]

export default function Routers() {
    return useRoutes(routers)
}

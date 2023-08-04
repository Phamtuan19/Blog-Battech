import { useRoutes } from 'react-router-dom'
import DefaultLayout from '~/component/DefaultLayout'
import Home from '~/page/Home'

const routers = [
    {
        path: '/',
        element: (
            <DefaultLayout>
                <Home />
            </DefaultLayout>
        )
    }
]

export default function Routers() {
    return useRoutes(routers)
}

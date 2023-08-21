import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import Routers from './routes/index.tsx'
import './i18n/i18n.ts'
import './style.css'
import LazyLoadingFullScreen from './component/customs/LazyLoadingFullScreen.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <Suspense fallback={<LazyLoadingFullScreen />}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
            {/* </PersistGate> */}
            <ToastContainer autoClose={3000} />
        </Suspense>
    </>
)

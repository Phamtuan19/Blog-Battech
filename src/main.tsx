import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import Routers from './routes/index.tsx'
import './i18n/i18n.ts'
import './style.css'
import store, { persistor } from './redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routers />
                </BrowserRouter>
            </PersistGate>
        </Provider>
        <ToastContainer autoClose={3000} />
    </>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routes/index.tsx'
import './i18n/i18n.ts'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    </React.StrictMode>
)

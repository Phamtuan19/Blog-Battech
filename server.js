// server/server.js
import { create, router as _router, defaults } from 'json-server'
const server = create()
const router = _router('db.json')
const middlewares = defaults()

server.use(middlewares)
server.use(router)

const port = 3001
server.listen(port, () => {
    console.log(`Máy chủ JSON đang chạy trên cổng ${port}`)
})
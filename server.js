/* eslint-disable @typescript-eslint/no-explicit-any */
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Custom endpoint for "like" filtering
server.get('/jobs', (req, res) => {
    const { addressId, workGroupId } = req.query
    let filteredJobs = router.db.get('jobs').value()

    // Áp dụng bộ lọc nếu addressId hoặc workGroupId được cung cấp
    if (addressId !== undefined && workGroupId !== undefined) {
        if (addressId !== '') {
            filteredJobs = filteredJobs.filter((job) => job.addressId === addressId)
        }

        if (workGroupId !== '') {
            filteredJobs = filteredJobs.filter((job) => job.workGroupId === workGroupId)
        }
    }

    res.json(filteredJobs)
})

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000')
})

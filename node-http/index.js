const HTTP = require('http')
const HOSTNAME = 'localhost'
const PORT = 3000

const SERVER = HTTP.createServer((req, res) => {
    // Log the request headers to the console
    console.log(`Headers: ${JSON.stringify(req.headers)}`)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')
})

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})
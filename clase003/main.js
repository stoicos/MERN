import http from 'node:http'
import hp from './hp.json' assert {type: 'json'}

const server = http.createServer((request, response) => {
    if(request.url === "/") {
        response.writeHead(200, {'Content-Type': "text/html"})
        response.write("<h1>Home page</h1>\n")
        response.end("End")
    } else if (request.url === "/api") {
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify(hp))
    }
})

server.listen(3000, () => {
    console.log('server running on port 3000')
})
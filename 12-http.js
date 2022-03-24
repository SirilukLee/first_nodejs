const http = require('http')
const server = http.createServer((req, res) => {
    if( req.url === '/') {
        res.end('Welcom to my Home page.')
    }
   
    if(req.url === '/about') {
        res.end('This is my short story.')
    }
    
    res.end(`
    <h1>Oops!</h1>
    <p>We can not find the page you looking for</p>
    <a href = '/'>back home</a>
    
    `)
    
      
})

server.listen(5000)
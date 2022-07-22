const http = require('http')

 const server = http.createServer((req,res)=>{
    res.write("Hello Everyone")
    res.end()
})
server.listen(8000,()=>{
    console.log("App is running")
})

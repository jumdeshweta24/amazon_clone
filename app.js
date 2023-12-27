const http = require("http")
let a = 1
const server = http.createServer((request, response) => {

    console.log(`Server runned ${a} times`);
    a++
    response.end("You are now in connect with the server...")
})


server.listen(4000, "127.0.0.1", () => {
    console.log("Server Started.....")
})
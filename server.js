const http = require('http');

const server = http.createServer((req, res) => {
  res.write("hellp");
  res.end();
});

server.listen(3000, (error) => {
  if(error){
    console.log("error opening server", error);
  }else{
    console.log("server listening on port: ", 3000);
  }
});

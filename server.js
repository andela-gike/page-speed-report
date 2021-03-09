const http = require('http');
const URL = require('url').URL;
const getPageSpeed  = require('./psiService');

const host = "localhost"
const PORT = process.env.PORT || 4000;

const server = http.createServer((request, response) => {
   const baseURL = 'http://' + request.headers.host + '/';
   console.log(request);
  const parsedUrl = new URL(request.url, baseURL);
  // const trimedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
  console.log('request ', parsedUrl);

  const queryStringObject = Object.fromEntries(parsedUrl.searchParams);
  console.log(queryStringObject)
  getPageSpeed(queryStringObject.psiUrl);

  const method = request.method.toLowerCase();

  response.writeHead(200, {"Content-Type": "application/json"});
  response.end('Hello world'/n);
})

server.listen(PORT, () => {
  console.log(`server is running on ${host} ${PORT}`)
})

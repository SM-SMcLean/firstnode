const http = require('http'); const PORT = 3000;
const fs = require('fs');
const htmlfile = fs.readFileSync(__dirname + '/html/hellonode.html');


const server = http.createServer((req, res) => {
    const currentpath = req.url;
      if (currentpath === '/') {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(htmlfile);
          res.end();
      } else {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.write('<h1>Page not found!</h1>');
          res.end();
}
});
server.listen(PORT, (err) => {
    if (err)
        return console.log(err);
    console.log(`Node Web Server listening on port http://localhost:${PORT}`);
});
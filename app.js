const http = require('http'); const PORT = 3000;
const server = http.createServer((req, res) => { console.log('request starting . . .');
});
server.listen(PORT, (err) => { if (err)
return console.log(err);
console.log(`Node Web Server listening on port http://localhost:${PORT}`); });
const http = require('http'); const PORT = 3000;
const server = http.createServer((req, res) => {
    console.log('request starting . . .');
    res.setHeader("Content-Type", "text/html");
    res.write('Hello from Node Web Server!');
    res.end();
});
server.listen(PORT, (err) => {
    if (err)
        return console.log(err);
    console.log(`Node Web Server listening on port http://localhost:${PORT}`);
});
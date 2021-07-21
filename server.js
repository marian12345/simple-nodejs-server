var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/message/post") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is the url to post messages</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/message/fetchAll") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is the url to fetch all messages</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
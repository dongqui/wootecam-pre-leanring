const http = require('http');
const url = require('url');

var routes = {
  "/api/parsetime": function(parsedUrl) {
    d = new Date(parsedUrl.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
};

const server = http.createServer(function(request, response) {
  const parsedUrl = url.parse(request.url, true);
  const date = new Date(parsedUrl.query.iso);
  if (parsedUrl.pathname === '/api/parsetime') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }));
  } else if (parsedUrl.pathname === '/api/unixtime') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({
      unixtime: date.getTime(),
    }));
  }
});
server.listen(process.argv[2]);

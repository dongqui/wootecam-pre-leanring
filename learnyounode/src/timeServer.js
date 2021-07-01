const net = require("net");

function pad(num) {
  return num.toLocaleString('en-US', {
    minimumIntegerDigits: 2, useGrouping:false
  });
}

const server = net.createServer(function(socket){
  const date = new Date();
  socket.end(`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}\n`);
});
server.listen(process.argv[2]);

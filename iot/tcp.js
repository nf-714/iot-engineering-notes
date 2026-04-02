const net = require('net');

const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';

const server = net.createServer((socket) => {
  const clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;
  console.log(`Client connected: ${clientAddress}`);

  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log(`Received from ${clientAddress}: ${message}`);

    // Echo the received data back to the client
    socket.write(`You said: ${message}\n`);
  });

  socket.on('end', () => {
    console.log(`Client disconnected: ${clientAddress}`);
  });

  socket.on('error', (err) => {
    console.error(`Socket error from ${clientAddress}:`, err.message);
  });
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
});

server.listen(PORT, HOST, () => {
  console.log(`TCP server listening on ${HOST}:${PORT}`);
});


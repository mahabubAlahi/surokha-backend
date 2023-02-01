/**
 * Initialise log4js first, so we don't miss any log messages
 */
const LogService = require('./services/log-service');
let log = LogService.createLogger("startup");
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');

/**
 * server configuration
 */
const dbService = require('./services/db-service');

/**
 * express application
 */
const app = express();
routes.initializeApplicationRoutes(app);
const DB = dbService().start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(LogService.expressLogger());
app.use(cors());

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
console.log(port);
app.set('port', port);


const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  log.info("Connected to port: " + port);
  return DB;
});
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    log.info("Listening on: " + bind);
}

try {
  require('fs').mkdirSync('./log');
} catch (e) {
  if (e.code != 'EEXIST') {
    log.error("Could not set up log directory, error was: ", e);
    process.exit(1);
  }
}
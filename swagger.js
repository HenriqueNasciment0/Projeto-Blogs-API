const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/server.js']; // Ex: "./src/routes/user.routes.js"

swaggerAutogen(outputFile, endpointsFiles);

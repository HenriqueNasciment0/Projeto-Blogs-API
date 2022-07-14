require('dotenv').config();
const app = require('./api');
const customError = require('./database/middlewares/customError');
const UserController = require('./database/controllers/userController');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', UserController.create);

app.use(customError);

app.listen(port, () => console.log('ouvindo porta', port));

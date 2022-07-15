require('dotenv').config();
const app = require('./api');
const customError = require('./database/middlewares/customError');
const LoginController = require('./database/controllers/loginController');
const UserController = require('./database/controllers/userController');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/user', UserController.create);

app.post('/login', LoginController.createT);

app.use(customError);

app.listen(port, () => console.log('ouvindo porta', port));

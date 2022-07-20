require('dotenv').config();
const app = require('./api');
const customError = require('./database/middlewares/customError');
const LoginController = require('./database/controllers/loginController');
const UserController = require('./database/controllers/userController');
const CategoryController = require('./database/controllers/categoryController');
const BlogPostController = require('./database/controllers/blogPostController');
const Auth = require('./database/middlewares/auth');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/user', UserController.create);

app.get('/user', Auth, UserController.getAll);

app.get('/user/:id', Auth, UserController.getById);

app.post('/login', LoginController.createT);

app.post('/categories', Auth, CategoryController.createCategory);

app.post('/post', Auth, BlogPostController.create);

app.get('/categories', Auth, CategoryController.getAll);

app.use(customError);

app.listen(port, () => console.log('ouvindo porta', port));

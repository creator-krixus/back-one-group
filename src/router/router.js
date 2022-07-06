const express = require('express');
const router = express.Router();
const routes = require('../users/routes/users')
const routerProducts = require('../products/routes/products')
const routerTasks = require('../tasks/routes/tasks')

const apiRouter = (app) => {
    app.use('/api/v1', router);
    router.use('/users', routes);
    router.use('/products', routerProducts);
    router.use('/tasks', routerTasks)
};

module.exports = apiRouter
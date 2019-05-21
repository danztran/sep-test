const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

global.requireWrp = p => require(path.resolve(__dirname, p));

const router = requireWrp('router');
const vueRouter = requireWrp('middlewares/vue-router-mdw');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// router
app.use(express.static(path.join(__dirname, 'vue-dist')));
app.use(router);
app.use(vueRouter);

module.exports = app;

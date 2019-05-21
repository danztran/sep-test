const router = require('express').Router();

const routes = route => requireWrp(`routes/${route}`);

/* GET home page. */
router.use('/', routes('index'));
router.use('/users', routes('users'));

module.exports = router;

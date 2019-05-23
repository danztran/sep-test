const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	res.send('with a title');
});

module.exports = router;

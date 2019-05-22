module.exports = function(req, res, next) {
	if (req.xhr) return next();
	return res.sendFile(`${process.env.VUE_DIST || 'vue-dist'}/index.html`, { root: './' });
};

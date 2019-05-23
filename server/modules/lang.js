const requireDir = require('require-dir');
const { varToText, replaceVars } = requireWrp('modules/common');
const packs = requireDir(`${__rootdir}resources/languages/`);

const defLocale = process.env.DEFAULT_LOCALE || 'en';
const defPack = packs[defLocale];

function Lang(locale) {
	// set locale
	this.locale = locale || defLocale;

	// language pack
	this.pack = packs[this.locale] || packs[defLocale];

	// translate
	this.$t = (key, args) => {
		let text = this.pack[key] || defPack[key] || varToText(key);
		if (args) {
			text = replaceVars(text, args, { s: '{', e: '}' });
		}
		return text;
	};
}

module.exports = Lang;

require('dotenv').config();

const envConfig = {
	production: {
		log_date_format: ''
	},
	development: {
		watch: true,
		ignore_watch: [
			'public',
			'storage',
			'.git',
			'logs',
			process.env.VUE_DIST || 'vue-dist'
		],
		log_date_format: 'YYYY-MM-DD HH:mm Z',
		out_file: './logs/out.log',
		error_file: './logs/error.log'
	}
};

module.exports = {
	apps: [{
		name: process.env.SUB_NAME || 'dev',
		script: process.env.MAIN_JS || './bin/www',
		...envConfig[process.env.NODE_ENV || 'development'],
		instances: process.env.PM2_INSTANCES || 1,
		exec_mode: 'cluster',
		autorestart: true,
		max_memory_restart: process.env.PM2_MMR,
		merge_logs: true
	}]
};

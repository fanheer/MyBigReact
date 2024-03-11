const Configuration = {
	extends: ['@commitlint/config-conventional'],
	// yand add -D @commitlint/format
	formatter: '@commitlint/format',
	helpUrl:
		'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'
};

module.exports = Configuration;

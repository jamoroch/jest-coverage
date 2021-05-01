module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
		'pageTitle': 'Test Result',
                'outputPath': 'test_results/index.html',
                'useCssFile': true
	}]
  ],
  coverageReporters: [
       'text-summary',
       'html'
  ],
};

const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl:  'http://localhost:9000',
    token: '<GENERATE_TOKEN>',
    options : {
      'sonar.sources':  'src',
      'sonar.tests':  '__tests__',
      'sonar.inclusions' :  '**',
      'sonar.test.inclusions':  '__tests__/**/*.test.js',
      'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
      'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
    }
  }, () => {});
module.exports = {
  default: {
    require: [
      'tests/step-definitions/*.js',
      'tests/hooks/*.js'
    ],
    paths: [
      'tests/features/*.feature'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ]
  }
};
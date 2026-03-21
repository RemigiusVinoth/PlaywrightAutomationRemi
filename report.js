const report = require('multiple-cucumber-html-reporter');
const { exec } = require('child_process');

report.generate({
  jsonDir: './reports',
  reportPath: './reports/html-report',
  metadata: {
    browser: { name: 'chromium', version: 'latest' },
    device: 'Local test machine',
    platform: { name: 'windows', version: '10' }
  },
  customData: {
    title: 'Test Execution Info',
    data: [
      { label: 'Project', value: 'Playwright BDD Framework' },
      { label: 'Executed By', value: 'Remigius' }
    ]
  }
});

// ✅ Windows auto-open command
exec('start reports/html-report/index.html');
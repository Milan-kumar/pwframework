const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Playwright Automation Report",
  pageTitle:"Bookcart App Test Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "127",
    },
    device: "Milan's PC",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book Cart Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
    //   { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
    //   { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});
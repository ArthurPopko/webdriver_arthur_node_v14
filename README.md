## My 1st WebdriverIO project
### Prerequisites:
#### Install NodeJS
The project correctly works with Node.js 14. 
It's highly recommended to use NVM. It will allow you to switch between the different versions of Node.js on demand.
**https://github.com/nvm-sh/nvm.git**

##### NOTE:

1. check the node version before every test run:
`node -v`
2. choose the 14th node version: `nvm use 14`

## Running all of auto-tests locally:
`npm run test`

## Running the created test suites:
```
    npm run textSuite
    npm run mouseSuite
    npm run keyboardSuite
    npm run iFrameSuite
    npm run tabsSuite
    npm run dragAndDropSuite
    npm run dropdownListSuite
    npm run alertsSuite
    npm run dynamicControlsSuite
    npm run waitForExistSuite
```

## To specify your own suites:

**Define suite name and scope in "wdio.conf.js":**

```
suites: {
    <suiteName>: [
        './test/specs_path/*.js'
    ],
},
```

**Specify the suite run command in "package.json":**
```
"scripts": {
    "<suiteName>": "ENV=qa wdio --suite <suitename>"
}
```
**Run the defined suite:**

`npm run <suitename>`

## Report
The allure should be installed globally. If not, run this command:

`npm install -g allure-commandline --save-dev`

To generate the HTML report, run the command:

`allure generate allure-results --clean && allure open`
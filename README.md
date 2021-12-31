#My 1st WebdriverIO project
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
## Running the defined suite locally:

`npm run <suiteName>`

**Define suite name and scope in "wdio.conf.js":**

`suites: {
<suiteName>: [
'./test/specs_path/*.js'
],
},`

**You may also specify suites in "package.json":**

`"scripts": {
"test": "wdio",
"textSuite": "wdio --suite textSuite",
"<suiteName>": "wdio --suite <suitename>"
}`

**Run the defined suite:**

`npm run <suitename>`

to be filled up...
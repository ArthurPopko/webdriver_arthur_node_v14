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

## 1. Running all of auto-tests locally:
`npx wdio run wdio.conf.js`
## Running the defined suite locally:
###Specify suite run in "package.json":
`"scripts": {
"test": "wdio",
"element_text": "wdio --suite <suitename>"
}`
###Define suite scope in "wdio.conf.js":
`suites: {
element_text: [
'./test/specs/element_text/*.js'
],
},`
###Run the defined suite:
`npm run <suitename>`

to be filled up...
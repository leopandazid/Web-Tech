var chalk = require('chalk')
console.log(chalk.blue('Hello World!'))
console.log(chalk.red('Hello World ...'))
console.log(chalk.blue.bgRed.bold('Hello World!'))
console.log(chalk.red('Hello World!' + chalk.blue.underline.bold('with blue substring') + "that becomes red again"))
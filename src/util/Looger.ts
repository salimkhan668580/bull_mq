import chalk from 'chalk';

export const logger = {
  success: (message:string) => {
    console.log(chalk.green(`✔ SUCCESS: ${message}`));
  },

  error: (message:string) => {
    console.log(chalk.red(`✖ ERROR: ${message}`));
  },

  info: (message:string) => {
    console.log(chalk.blue(`ℹ INFO: ${message}`));
  },

  warning: (message:string) => {
    console.log(chalk.yellow(`⚠ WARNING: ${message}`));
  },
};

import chalk from 'chalk';

export const terminalError = (message: string): void => {
  const colorRed = '#ff5549';
  // eslint-disable-next-line no-console
  return console.error(chalk.hex(colorRed).bold('Error: ') + chalk.hex(colorRed)(message));
};

export const terminalInfo = (message: string): void => {
  const colorBlue = '#26c0d3';
  // eslint-disable-next-line no-console
  return console.info(chalk.hex(colorBlue).bold('Info: ') + chalk.hex(colorBlue)(message));
};

export const terminalSuccess = (message: string): void => {
  const colorGreen = '#32c682';
  // eslint-disable-next-line no-console
  return console.log(chalk.hex(colorGreen).bold('Success: ') + chalk.hex(colorGreen)(message));
};

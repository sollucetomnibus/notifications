import { existsSync, copyFile, mkdirSync } from 'fs';
import { join } from 'path';

import { terminalError } from './logger';

const files: string[] = [
  'CHANGELOG.md',
  'LICENSE',
  'package.json',
  'README.md',
];

export const copier = async (directory: string): Promise<boolean> => new Promise((resolve) => {
  if (!existsSync(directory)) {
    mkdirSync(directory);
  }

  files.map((file) => {
    if (!existsSync(file)) {
      terminalError(`"${file}" file does not exist.`);
      resolve(false);
      return;
    }

    copyFile(
      file,
      join(directory, file),
      (err) => {
        if (err) {
          terminalError(`Something went wrong during copying the "${file}" file to the "${directory}" folder.`);
        }
      },
    );
  });

  resolve(true);
});

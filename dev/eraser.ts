import { readdirSync, rmdirSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';

import { terminalInfo } from './logger';

const isDir = (path: string): boolean => {
  try {
    return statSync(path).isDirectory();
  } catch (error) {
    return false;
  }
};

const getFiles = (path: string): string[] => readdirSync(path).map((name) => join(path, name));

const getDirectories = (path: string): string[] => readdirSync(path).map((name) => join(path, name)).filter(isDir);

export const removeAll = async (directory: string): Promise<boolean> => new Promise((resolve) => {
  try {
    getDirectories(directory).map((dir) => removeAll(dir));
    getFiles(directory).map((file) => unlinkSync(file));
    rmdirSync(directory);
    resolve(true);
  } catch {
    terminalInfo(`There is no such a folder as "${directory}" to remove.`);
    resolve(false);
  }
});

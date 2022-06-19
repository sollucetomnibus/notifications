import { copier } from './copier';
import { removeAll } from './eraser';

const preDistribution = async (directory: string): Promise<void> => {
  await removeAll(directory);
  await copier(directory);
};
preDistribution('dist');

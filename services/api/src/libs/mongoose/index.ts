import mongoose from 'mongoose';
import logger from '../logger';

export const connect = async (uri: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    mongoose.connect(uri, (error) => {
      if (error) {
        logger.error(error, 'connect error');
        reject(error);
        return;
      }
      resolve('success');
    });
  });
};

import { createClient } from 'redis';
import { REDIS_ENDPOINT, REDIS_PASSWORD, REDIS_USERNAME } from '../../configs';
import logger from '../logger';

let client: any = null;

export const getClient = async () => {
  if (client !== null) {
    return client;
  }

  const url = `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_ENDPOINT}`;

  client = createClient({ url });

  await client.connect();

  client.on('error', (error: Error) =>
    console.log('Redis Client Error', error)
  );

  logger.info('init redis client');

  return client;
};

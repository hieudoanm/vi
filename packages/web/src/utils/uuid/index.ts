import { v4 } from 'uuid';

export const uuid = (): string => {
  return v4();
};

export default uuid;

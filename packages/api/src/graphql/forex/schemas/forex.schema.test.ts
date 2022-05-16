import { schemas } from './forex.schema';

describe('crypto schemas', () => {
  it('should match snapshot', async () => {
    expect(schemas).toBeTruthy();
    expect(schemas).toMatchSnapshot();
  });
});

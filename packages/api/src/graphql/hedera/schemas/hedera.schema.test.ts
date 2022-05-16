import { schemas } from './hedera.schema';

describe('hedera schemas', () => {
  it('should match snapshot', async () => {
    expect(schemas).toBeTruthy();
    expect(schemas).toMatchSnapshot();
  });
});

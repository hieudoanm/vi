import { resolvers, schemas } from '.';

describe('hedera schemas', () => {
  it('should match snapshot', async () => {
    expect(resolvers).toBeTruthy();
    expect(schemas).toBeTruthy();
  });
});

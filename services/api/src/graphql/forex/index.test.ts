import { resolvers, schemas } from '.';

describe('forex', () => {
  it('should be truthy', async () => {
    expect(resolvers).toBeTruthy();
    expect(schemas).toBeTruthy();
  });
});

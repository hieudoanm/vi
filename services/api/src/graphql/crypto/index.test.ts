import { resolvers, schemas } from '.';

describe('crypto', () => {
  it('should be truthy', async () => {
    expect(resolvers).toBeTruthy();
    expect(schemas).toBeTruthy();
  });
});

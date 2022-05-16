import { resolvers, typeDefs } from '.';

describe('graphql', () => {
  it('should be truthy', async () => {
    expect(resolvers).toBeTruthy();
    expect(typeDefs).toBeTruthy();
  });
});

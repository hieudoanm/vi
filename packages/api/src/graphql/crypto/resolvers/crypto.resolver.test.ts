import axios from 'axios';
import resolvers from './crypto.resolver';

jest.mock('axios');

describe('crypto resolvers', () => {
  describe('query', () => {
    describe('coins', () => {
      it('complete with success status', async () => {
        jest
          .spyOn(axios, 'get')
          .mockResolvedValueOnce({ status: 'success', data: { coins: [] } });
        const coins = await resolvers.Query.coins();
        expect(coins).toEqual([]);
      });
    });
  });
});

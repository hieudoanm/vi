import axios from 'axios';
import resolvers from './forex.resolver';

jest.mock('axios');

describe('forex resolvers', () => {
  describe('query', () => {
    describe('forex', () => {
      it('complete with success status', async () => {
        jest
          .spyOn(axios, 'get')
          .mockResolvedValueOnce({ status: 'success', data: { rates: [] } });
        const rates = await resolvers.Query.rates(null, {
          amount: 1,
          base: 'VND',
        });
        expect(rates).toEqual([]);
      });
    });
  });
});

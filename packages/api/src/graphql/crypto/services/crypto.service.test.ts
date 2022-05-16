import axios from 'axios';
import { getCoins } from './crypto.service';

jest.mock('axios');

describe('crypto service', () => {
  describe('getCoins', () => {
    it('complete with success status', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ status: 'success', data: { coins: [] } });
      const coins = await getCoins();
      expect(coins).toEqual([]);
    });
  });
});

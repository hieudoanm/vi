import axios from 'axios';
import { getCoins } from './crypto.service';

jest.mock('axios');

describe('crypto', () => {
  describe('getCoins', () => {
    it('complete with success status', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { status: 'success', data: { coins: [] } },
      });
      const coins = await getCoins();
      expect(coins).toEqual({ total: 0, data: [] });
    });

    it('complete with error status', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { status: 'error' },
      });
      const coins = await getCoins();
      expect(coins).toEqual({ total: 0, data: [] });
    });
  });
});

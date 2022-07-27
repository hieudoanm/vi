import axios from 'axios';
import { CryptoController } from './crypto.controller';

jest.mock('axios');

describe('crypto', () => {
  const cryptoController = new CryptoController();
  describe('getCoins', () => {
    it('complete with success status', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { status: 'success', data: { coins: [] } },
      });
      const coins = await cryptoController.getCoins();
      expect(coins).toEqual({ total: 0, data: [] });
    });

    it('complete with error status', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { status: 'error' },
      });
      const coins = await cryptoController.getCoins();
      expect(coins).toEqual({ total: 0, data: [] });
    });
  });
});

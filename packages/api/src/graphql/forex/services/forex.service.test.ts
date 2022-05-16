import axios from 'axios';
import { convertRates, getRates } from './forex.service';

jest.mock('axios');

describe('forex service', () => {
  describe('convertRates', () => {
    it('complete with success status', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ status: 'success', data: { rates: [] } });
      const rates = await convertRates({ amount: 1, base: 'VND' });
      expect(rates).toEqual([]);
    });
  });

  describe('getRates', () => {
    it('complete with success status', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ status: 'success', data: { rates: [] } });
      const rates = await getRates({ amount: 1, base: 'VND' });
      expect(rates).toEqual([]);
    });
  });
});

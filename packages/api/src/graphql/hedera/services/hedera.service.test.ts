import axios from 'axios';
import {
  getAccount,
  createAccount,
  getBalance,
  transfer,
} from './hedera.service';

jest.mock('axios');

describe('hedera service', () => {
  describe('getAccount', () => {
    it('complete with success status', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ status: 'success', data: { account: {} } });
      const account = await getAccount('test@example.com');
      expect(account).toEqual({});
    });
  });

  describe('createAccount', () => {
    it('complete with success status', async () => {
      jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce({ status: 'success', data: { account: {} } });
      const account = await createAccount('test@example.com');
      expect(account).toEqual({});
    });
  });

  describe('getBalance', () => {
    it('complete with success status', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ status: 'success', data: { balance: {} } });
      const balance = await getBalance('test@example.com');
      expect(balance).toEqual({});
    });
  });

  describe('transfer', () => {
    it('complete with success status', async () => {
      jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce({ status: 'success', data: { receipt: {} } });
      const receipt = await transfer({
        amount: 1000,
        fromEmail: 'from@example.com',
        toEmail: 'to@example.com',
      });
      expect(receipt).toEqual({});
    });
  });
});

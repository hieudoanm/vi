import axios from 'axios';
import resolvers from './hedera.resolver';

jest.mock('axios');

describe('forex resolvers', () => {
  describe('Query', () => {
    describe('getAccount', () => {
      it('complete with success status', async () => {
        jest
          .spyOn(axios, 'get')
          .mockResolvedValueOnce({ status: 'success', data: { account: {} } });
        const account = await resolvers.Query.account(undefined, {
          email: 'test@example.com',
        });
        expect(account).toEqual({});
      });
    });

    describe('getBalance', () => {
      it('complete with success status', async () => {
        jest
          .spyOn(axios, 'get')
          .mockResolvedValueOnce({ status: 'success', data: { balance: {} } });
        const balance = await resolvers.Query.balance(undefined, {
          email: 'test@example.com',
        });
        expect(balance).toEqual({});
      });
    });
  });

  describe('Mutation', () => {
    describe('createAccount', () => {
      it('complete with success status', async () => {
        jest
          .spyOn(axios, 'post')
          .mockResolvedValueOnce({ status: 'success', data: { account: {} } });
        const account = await resolvers.Mutation.account(undefined, {
          email: 'test@example.com',
        });
        expect(account).toEqual({});
      });
    });

    describe('transfer', () => {
      it('complete with success status', async () => {
        jest
          .spyOn(axios, 'post')
          .mockResolvedValueOnce({ status: 'success', data: { receipt: {} } });
        const receipt = await resolvers.Mutation.transfer(undefined, {
          amount: 1000,
          fromEmail: 'from@example.com',
          toEmail: 'to@example.com',
        });
        expect(receipt).toEqual({});
      });
    });
  });
});

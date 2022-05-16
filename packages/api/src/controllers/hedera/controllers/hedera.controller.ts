import { Body, Controller, Get, Post, Query, Route } from 'tsoa';
import {
  getAccount,
  postAccount,
  getBalance,
  postTransfer,
  getToken,
  topUp,
} from '../services/hedera.service';
import { AccountType, Receipt, TopUpRequestBody } from '../types';
import { Balance, TransferRequestBody } from '../types';

@Route('hedera')
export class HederaController extends Controller {
  @Get('/account')
  public async getAccount(@Query('email') email: string): Promise<{
    account: AccountType;
  }> {
    return getAccount(email);
  }

  @Post('/account')
  public async postAccount(@Body() { email }: { email: string }): Promise<{
    account: AccountType | null;
  }> {
    return postAccount(email);
  }

  @Get('/token')
  public async getToken(@Query() tokenId: string): Promise<{
    token: any;
  }> {
    return getToken(tokenId);
  }

  @Get('/balance')
  public async getBalance(@Query('email') email: string): Promise<{
    balance: Balance;
  }> {
    return getBalance(email);
  }

  @Post('/top-up')
  public async topUp(@Body() topUpRequestBody: TopUpRequestBody): Promise<{
    receipt: Receipt;
  }> {
    return topUp(topUpRequestBody);
  }

  @Post('/transfer')
  public async postTransfer(
    @Body() transferRequestBody: TransferRequestBody
  ): Promise<{
    receipt: Receipt;
  }> {
    return postTransfer(transferRequestBody);
  }
}

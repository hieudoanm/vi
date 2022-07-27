import { Route, Controller, Get, Tags } from 'tsoa';
import { getCoins } from '../services/crypto.service';
import { Coin } from '../types';

@Route('crypto')
@Tags('Crypto')
export class CryptoController extends Controller {
  @Get('coins')
  public async getCoins(): Promise<{
    total: number;
    data: Array<Coin>;
  }> {
    return getCoins();
  }
}

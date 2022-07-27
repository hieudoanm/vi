import { Route, Controller, Get, Query } from 'tsoa';
import { currencies } from '../../../constants';
import { convertRates, getRates, Rate } from '../services/forex.service';
import { Currency } from '../types';

@Route('forex')
export class ForexController extends Controller {
  @Get()
  public async getCurrencies(): Promise<{
    total: number;
    data: Array<Currency>;
  }> {
    return { total: currencies.length, data: currencies };
  }

  @Get('/rates')
  public async getRates(
    @Query('amount') amount = 1,
    @Query('base') base = 'VND'
  ): Promise<Array<Rate>> {
    return await getRates({ amount, base });
  }

  @Get('/convert')
  public async convertRates(
    @Query('amount') amount = 1,
    @Query('base') base = 'VND'
  ): Promise<Array<Rate>> {
    return await convertRates({ amount, base });
  }
}

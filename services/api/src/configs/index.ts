import dotenv from 'dotenv';

export const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  dotenv.config();
}

export const PORT = process.env.PORT || '8080';

const DEV_API = process.env.DEV_API || 'http://localhost:8080';
const PRO_API = process.env.PRO_API || 'https://walletapi.herokuapp.com';
export const API = NODE_ENV === 'development' ? DEV_API : PRO_API;

export const FIXER_ACCESS_KEY = process.env.FIXER_ACCESS_KEY || '';

export const MONGO_URI = process.env.MONGO_URI || '';

export const POSTGRE_REPO: string = process.env.POSTGRE_REPO || '5432';
export const POSTGRE_HOST: string = process.env.POSTGRE_HOST || 'localhost';
export const POSTGRE_PORT: string = process.env.POSTGRE_PORT || '5432';
export const POSTGRE_USERNAME: string =
  process.env.POSTGRE_USERNAME || 'username';
export const POSTGRE_PASSWORD: string =
  process.env.POSTGRE_PASSWORD || 'password';
export const POSTGRE_DATABASE: string =
  process.env.POSTGRE_DATABASE || 'database';

export const REDIS_ENDPOINT: string = process.env.REDIS_ENDPOINT || '';
export const REDIS_USERNAME: string = process.env.REDIS_USERNAME || 'username';
export const REDIS_PASSWORD: string = process.env.REDIS_PASSWORD || 'password';

export const TREASURY_ACCOUNT_ID: string =
  process.env.TREASURY_ACCOUNT_ID || '';
export const TREASURY_PUBLIC_KEY: string =
  process.env.TREASURY_PUBLIC_KEY || '';
export const TREASURY_PRIVATE_KEY: string =
  process.env.TREASURY_PRIVATE_KEY || '';

export const AUD_TOKEN_ID: string = process.env.AUD_TOKEN_ID || '';
export const CAD_TOKEN_ID: string = process.env.CAD_TOKEN_ID || '';
export const CHF_TOKEN_ID: string = process.env.CHF_TOKEN_ID || '';
export const EUR_TOKEN_ID: string = process.env.EUR_TOKEN_ID || '';
export const GBP_TOKEN_ID: string = process.env.GBP_TOKEN_ID || '';
export const JPY_TOKEN_ID: string = process.env.JPY_TOKEN_ID || '';
export const SGD_TOKEN_ID: string = process.env.SGD_TOKEN_ID || '';
export const USD_TOKEN_ID: string = process.env.USD_TOKEN_ID || '';
export const VND_TOKEN_ID: string = process.env.VND_TOKEN_ID || '';

export const AUD_TOKEN_CODE: string = process.env.AUD_TOKEN_CODE || 'AUDH';
export const CAD_TOKEN_CODE: string = process.env.CAD_TOKEN_CODE || 'CADH';
export const CHF_TOKEN_CODE: string = process.env.CHF_TOKEN_CODE || 'CHFH';
export const EUR_TOKEN_CODE: string = process.env.EUR_TOKEN_CODE || 'EURH';
export const GBP_TOKEN_CODE: string = process.env.GBP_TOKEN_CODE || 'GBPH';
export const JPY_TOKEN_CODE: string = process.env.JPY_TOKEN_CODE || 'JPYH';
export const SGD_TOKEN_CODE: string = process.env.SGD_TOKEN_CODE || 'SGDH';
export const USD_TOKEN_CODE: string = process.env.USD_TOKEN_CODE || 'USDH';
export const VND_TOKEN_CODE: string = process.env.VND_TOKEN_CODE || 'VNDH';

export const AUD_TOKEN_NAME: string =
  process.env.AUD_TOKEN_NAME || 'Australian Dollar HBAR';
export const CAD_TOKEN_NAME: string =
  process.env.CAD_TOKEN_NAME || 'Canadian Dollar HBAR';
export const CHF_TOKEN_NAME: string =
  process.env.CHF_TOKEN_NAME || 'Swiss Franc HBAR';
export const EUR_TOKEN_NAME: string = process.env.EUR_TOKEN_NAME || 'Euro HBAR';
export const GBP_TOKEN_NAME: string =
  process.env.GBP_TOKEN_NAME || 'British Pound HBAR';
export const JPY_TOKEN_NAME: string =
  process.env.JPY_TOKEN_NAME || 'Japanese Yen HBAR';
export const SGD_TOKEN_NAME: string =
  process.env.SGD_TOKEN_NAME || 'Singapore Dollar HBAR';
export const USD_TOKEN_NAME: string =
  process.env.USD_TOKEN_NAME || 'United States Dollar HBAR';
export const VND_TOKEN_NAME: string =
  process.env.VND_TOKEN_NAME || 'Vietnamese Dong HBAR';

import { useUser } from '@auth0/nextjs-auth0';
import get from 'lodash/get';
import { NextPage } from 'next';
import React, { FormEvent, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AppContainer from '../../../components/templates/AppsTemplate';
import { currencies } from '../../../constants';

const TopUpForm: React.FC<{ user: any }> = ({ user }) => {
  const email: string = get(user, 'email');

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('VND');

  const currencyOptions = currencies.map((currency) => {
    const { name, symbol } = currency;
    return { value: symbol, text: `${symbol} - ${name}` };
  });

  const topUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, amount);
  };

  return (
    <section id="topUp">
      <form onSubmit={topUp}>
        <Card className="shadow border">
          <CardHeader title="Free of Charge" />
          <CardContent>
            <div className="mb-6">
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-2">
                  <TextField
                    label="Amount"
                    id="amount"
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const value: number = parseFloat(event.target.value);
                      setAmount(value);
                    }}
                    className="w-full"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₫</InputAdornment>
                      ),
                    }}
                    required
                  />
                </div>
                <div className="col-span-2 md:col-span-2">
                  <Select
                    id="currency"
                    name="currency"
                    value={currency}
                    placeholder="Currency"
                    onChange={(event) => setCurrency(event.target.value)}
                    className="w-full"
                    required
                    disabled
                  >
                    {currencyOptions.map((option, index) => {
                      return (
                        <MenuItem key={index} value={option.value}>
                          {option.text}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <div className="w-full">
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-4">
                  <Button
                    type="submit"
                    name="transfer"
                    variant="contained"
                    className="w-full"
                  >
                    Send Payment
                  </Button>
                </div>
              </div>
            </div>
          </CardActions>
        </Card>
      </form>
    </section>
  );
};

const TopUpPage: NextPage = () => {
  const { isLoading, error, user } = useUser();

  if (isLoading) {
    return <>Loading</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <AppContainer title="Top Up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TopUpForm user={user} />
      </div>
    </AppContainer>
  );
};

export default TopUpPage;

import { NextPage } from 'next';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SectionHeader from '../../../components/molecules/SectionHeader';
import AppContainer from '../../../components/templates/AppsTemplate';
import { currencies } from '../../../constants';
import { useUser } from '@auth0/nextjs-auth0';

const TransferForm: React.FC = () => {
  const [toEmail, setToEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('VND');
  const [note, setNote] = useState('');

  const transfer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toEmail, amount, note);
  };

  const currencyOptions = currencies.map((currency) => {
    const { name, symbol } = currency;
    return { value: symbol, text: `${symbol} - ${name}` };
  });

  return (
    <section id="transfer">
      <form onSubmit={transfer}>
        <Card className="shadow border">
          <CardHeader title="Send Payment" />
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between items-center gap-4">
                <TextField
                  label="Email"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={toEmail}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setToEmail(event.target.value)
                  }
                  className="w-full"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                />
              </div>
            </div>
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
            <div>
              <TextField
                multiline
                minRows={2}
                maxRows={4}
                label="Note"
                id="note"
                name="note"
                placeholder="Note"
                value={note}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setNote(event.target.value)
                }
                className="w-full"
                required
              />
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

const TransferPage: NextPage = () => {
  const { isLoading, error, user } = useUser();

  if (isLoading) {
    return <>Loading</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <AppContainer title="Transfer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TransferForm />
        <section id="account">
          <SectionHeader>Recent Account</SectionHeader>
        </section>
      </div>
    </AppContainer>
  );
};

export default TransferPage;

import { useUser } from '@auth0/nextjs-auth0';
import { useQuery } from '@apollo/client';
import get from 'lodash/get';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import AppContainer from '../../components/templates/AppsTemplate';
import { GET_BALANCE } from '../../apollo/schemas';
import { Balance } from '../../types';
import currencyFormatter from '../../utils/currency';

const Apps: React.FC<{ email: string }> = ({ email }) => {
  const { data, loading } = useQuery<{ balance: Balance }>(GET_BALANCE, {
    variables: { email },
  });

  if (loading) {
    return <></>;
  }

  const balance: Balance = get(data, 'balance', {}) as Balance;

  console.log(balance);

  return (
    <AppContainer title="Overview">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <section>
          <Card className="shadow border">
            <div className="flex justify-between">
              <CardHeader title="Balance" className="uppercase" />
              <CardActions>
                <Link href="/apps/transfer" passHref>
                  <Button type="button" variant="contained" name="transfer">
                    Transfer
                  </Button>
                </Link>
                <Link href="/apps/top-up" passHref>
                  <Button variant="contained" type="button" name="top-up">
                    Top Up
                  </Button>
                </Link>
              </CardActions>
            </div>
            <CardContent>
              <p className="text-gray-500 mb-2">Available</p>
              <p className="text-xl">
                {balance.symbol} {currencyFormatter(balance.balance)}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </AppContainer>
  );
};

const AppsPage: NextPage = () => {
  const { isLoading, error, user } = useUser();

  if (isLoading) {
    return <>Loading</>;
  }

  if (error) {
    return <>{error}</>;
  }

  console.log(user);

  const email: string = get(user, 'email', '') || '';

  return <Apps email={email} />;
};

export default AppsPage;

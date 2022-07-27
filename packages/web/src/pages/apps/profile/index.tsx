import { useUser } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AppsContainer from '../../../components/templates/AppsTemplate';

const ProfileForm: React.FC<{ user: any }> = ({ user: defaultUser }) => {
  const [user, setUser] = useState(defaultUser);

  return (
    <AppsContainer title="Profile">
      <div className="shadow border p-8 rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <TextField
              label="Full Name"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={user.name || ''}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUser({ ...user, name: event.target.value })
              }
              className="w-full"
              required
              disabled
            />
          </div>
          <div>
            <TextField
              label="Username"
              id="nickname"
              type="text"
              name="nickname"
              placeholder="Nickname"
              value={user.nickname || ''}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUser({ ...user, nickname: event.target.value })
              }
              className="w-full"
              required
              disabled
            />
          </div>
          <div>
            <TextField
              label="Email Address"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={user.email || ''}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUser({ ...user, email: event.target.value })
              }
              className="w-full"
              required
              disabled
            />
          </div>
        </div>
      </div>
    </AppsContainer>
  );
};

const ProfilePage: NextPage = () => {
  const { isLoading, error, user } = useUser();

  if (isLoading) {
    return <>Loading</>;
  }

  if (error) {
    return <>{error}</>;
  }

  console.log(user);

  return <ProfileForm user={user} />;
};

export default ProfilePage;

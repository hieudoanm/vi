import { UserProvider } from '@auth0/nextjs-auth0';
import { render } from '@testing-library/react';
import ProfilePage from '../../../pages/apps/profile';

describe('AppsTemplate', () => {
  test('render default', () => {
    const wrapper = render(
      <UserProvider>
        <ProfilePage />
      </UserProvider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

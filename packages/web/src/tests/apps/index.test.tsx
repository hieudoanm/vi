import { UserProvider } from '@auth0/nextjs-auth0';
import { render } from '@testing-library/react';
import AppsPage from '../../pages/apps';

describe('AppsTemplate', () => {
  test('render default', () => {
    const wrapper = render(
      <UserProvider>
        <AppsPage />
      </UserProvider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

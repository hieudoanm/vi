import { UserProvider } from '@auth0/nextjs-auth0';
import { render } from '@testing-library/react';
import HomePage from '../pages';

describe('AppsTemplate', () => {
  test('render default', () => {
    const wrapper = render(
      <UserProvider>
        <HomePage />
      </UserProvider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

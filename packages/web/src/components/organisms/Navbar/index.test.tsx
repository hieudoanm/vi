import { UserProvider } from '@auth0/nextjs-auth0';
import { render } from '@testing-library/react';
import NavBar from '.';

describe('NavBar', () => {
  test('render default', () => {
    const wrapper = render(
      <UserProvider>
        <NavBar />
      </UserProvider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

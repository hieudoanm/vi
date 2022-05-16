import { UserProvider } from '@auth0/nextjs-auth0';
import { render } from '@testing-library/react';
import AppsBar from '.';

describe('AppsBar', () => {
  test('render default', () => {
    const wrapper = render(
      <UserProvider>
        <AppsBar appName="test" />
      </UserProvider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

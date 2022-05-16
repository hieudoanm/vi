import { UserProvider } from '@auth0/nextjs-auth0';
import { render } from '@testing-library/react';
import HomeTemplate from '.';

describe('HomeTemplate', () => {
  test('render default', () => {
    const wrapper = render(
      <UserProvider>
        <HomeTemplate features={[]} pages={[]} />
      </UserProvider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

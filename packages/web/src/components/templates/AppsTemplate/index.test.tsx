import { UserProvider } from '@auth0/nextjs-auth0';
import { render } from '@testing-library/react';
import AppsTemplate from '.';

describe('AppsTemplate', () => {
  test('render default', () => {
    const wrapper = render(
      <UserProvider>
        <AppsTemplate title="title" />
      </UserProvider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

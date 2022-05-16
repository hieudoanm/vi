import List from '.';
import { render } from '@testing-library/react';

describe('List', () => {
  test('render default', () => {
    const wrapper = render(<List>List</List>);
    expect(wrapper.container).toMatchSnapshot();
  });
});

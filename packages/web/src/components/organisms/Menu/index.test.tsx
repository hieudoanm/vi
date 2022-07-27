import { render } from '@testing-library/react';
import Menu from '.';

describe('Menu', () => {
  test('render default', () => {
    const wrapper = render(<Menu active="" links={[]} />);
    expect(wrapper.container).toMatchSnapshot();
  });
});

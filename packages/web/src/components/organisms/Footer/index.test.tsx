import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  test('render default', () => {
    const wrapper = render(<Footer pages={[]} />);
    expect(wrapper.container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import Item from '.';

describe('Item', () => {
  test('render default', () => {
    const wrapper = render(<Item>Item</Item>);
    expect(wrapper.container).toMatchSnapshot();
  });
});

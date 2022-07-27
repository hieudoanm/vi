import { render } from '@testing-library/react';
import CTA from '.';

describe('CTA', () => {
  test('render default', () => {
    const wrapper = render(<CTA />);
    expect(wrapper.container).toMatchSnapshot();
  });
});

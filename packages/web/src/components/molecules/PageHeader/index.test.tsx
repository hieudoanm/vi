import PageHeader from '.';
import { render } from '@testing-library/react';

describe('PageHeader', () => {
  test('render default', () => {
    const wrapper = render(<PageHeader />);
    expect(wrapper.container).toMatchSnapshot();
  });
});

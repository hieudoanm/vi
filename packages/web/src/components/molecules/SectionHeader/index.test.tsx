import SectionHeader from '.';
import { render } from '@testing-library/react';

describe('SectionHeader', () => {
  test('render default', () => {
    const wrapper = render(<SectionHeader />);
    expect(wrapper.container).toMatchSnapshot();
  });
});

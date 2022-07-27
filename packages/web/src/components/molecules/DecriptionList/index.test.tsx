import DescriptionList from '.';
import { render } from '@testing-library/react';

describe('DescriptionList', () => {
  test('render default', () => {
    const wrapper = render(<DescriptionList items={[]} />);
    expect(wrapper.container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import Features from '.';

describe('Features', () => {
  test('render default', () => {
    const wrapper = render(
      <Features id="id" title="title" subtitle="subtitle" features={[]} />
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

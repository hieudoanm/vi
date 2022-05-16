import EmptyState from '.';
import { render } from '@testing-library/react';

describe('EmptyState', () => {
  test('render default', () => {
    const wrapper = render(
      <EmptyState title="title" description="description" />
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});

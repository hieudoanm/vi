import { render } from '@testing-library/react';
import Hero from '.';

describe('Hero', () => {
  test('render default', () => {
    const wrapper = render(<Hero />);
    expect(wrapper.container).toMatchSnapshot();
  });
});

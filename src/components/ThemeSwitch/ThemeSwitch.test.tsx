import { Wrapper } from '@jest-dir/utils/testUtils';
import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeSwitch } from '.';

describe('Theme switch', () => {
  test('element renders', async () => {
    render(
      <Wrapper>
        <ThemeSwitch />
      </Wrapper>
    );

    const element = screen.getByTestId('theme-switch');

    expect(element).toBeInTheDocument();
  });

  test('changing theme by click', async () => {
    render(
      <Wrapper>
        <ThemeSwitch />
      </Wrapper>
    );

    const element = screen.getByTestId('theme-switch');
    const sunImg = screen.getByTestId('sun-img');
    expect(sunImg).toBeInTheDocument();
    fireEvent.click(element);
    const moonImg = screen.getByTestId('moon-img');
    expect(moonImg).toBeInTheDocument();
  });
});

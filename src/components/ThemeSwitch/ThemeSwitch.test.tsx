import { render, screen } from '@testing-library/react';
import { Wrapper } from '@jest-dir/utils/testUtils';
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
});

import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { BurgerMenu } from '.';

describe('Burger menu', () => {
  test('renders the relevant data', async () => {
    render(
      <Wrapper>
        <BurgerMenu />
      </Wrapper>
    );

    const menuItem = screen.getByText(/Theme/i);
    expect(menuItem).toBeInTheDocument();
  });
});

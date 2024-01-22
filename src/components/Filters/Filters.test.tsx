import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { Filters } from '.';

describe('Filters', () => {
  test('element renders', async () => {
    render(
      <Wrapper>
        <Filters />
      </Wrapper>
    );

    const element = screen.getByTestId('filters');

    expect(element).toBeInTheDocument();
  });

  test('all buttons render', async () => {
    render(
      <Wrapper>
        <Filters />
      </Wrapper>
    );

    const buttons = screen.getAllByTestId('filters-button');

    expect(buttons).toHaveLength(7);
  });
});

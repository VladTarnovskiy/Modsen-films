import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { SearchButton } from '.';

describe('Search button', () => {
  test('element renders', async () => {
    const mockFn = jest.fn();
    render(
      <Wrapper>
        <SearchButton handleSubmit={mockFn} />
      </Wrapper>
    );

    const element = screen.getByTestId('search-button');

    expect(element).toBeInTheDocument();
  });
});

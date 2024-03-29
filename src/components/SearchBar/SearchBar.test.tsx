import { Wrapper } from '@jest-dir/utils/testUtils';
import { MyLocalStorage } from '@src/utils/localStorage';
import { fireEvent, render, screen } from '@testing-library/react';

import { SearchBar } from '.';

describe('Search bar', () => {
  test('element renders', async () => {
    render(
      <Wrapper>
        <SearchBar />
      </Wrapper>
    );

    const element = screen.getByTestId(/search-bar/i);

    expect(element).toBeInTheDocument();
  });

  test('verify that clicking the search button saves the entered value to the local storage', async () => {
    render(
      <Wrapper>
        <SearchBar />
      </Wrapper>
    );

    const searchBar = screen.getByPlaceholderText('Search');
    const button = screen.getByTestId('search-button');

    fireEvent.change(searchBar, { target: { value: 'Modsen' } });
    fireEvent.click(button);

    const storageValue = MyLocalStorage.getItem('searchValue');

    expect(storageValue).toBe('Modsen');
  });
});

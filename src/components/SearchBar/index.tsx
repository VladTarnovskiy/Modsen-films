import SearchImg from '@assets/Search.svg';
import { useDebounce } from '@src/hooks/useDebounce';
import { useSearchVideosQuery } from '@src/store/slices/ApiSlice';
import {
  clearVideos,
  selectSearchValue,
  setSearchValue,
} from '@src/store/slices/MainPageSlice';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchItem } from '../SearchItem';
import * as S from './styled';

export const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchValue') || ''
  );
  const [isSearchList, setIsSearchList] = useState(false);
  const debouncedValue = useDebounce<string>(inputValue, 500);
  const { data: searchData, isSuccess } = useSearchVideosQuery({
    searchValue: debouncedValue,
  });

  const handleSubmit = () => {
    setIsSearchList(false);
    if (searchValue !== inputValue) {
      dispatch(clearVideos());
      dispatch(setSearchValue(inputValue));
      localStorage.setItem('searchValue', inputValue);
    }
  };

  const setSearchFromList = (value: string) => {
    setInputValue(value);
    if (searchValue !== value) {
      dispatch(clearVideos());
      dispatch(setSearchValue(value));
      localStorage.setItem('searchValue', value);
    }
  };

  const setOnBlur = () => {
    setTimeout(() => {
      setIsSearchList(false);
    }, 300);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <S.SearchBarContainer data-testid="search-bar">
      <S.SearcherContainer>
        <S.SearchBar
          type="search"
          placeholder="Search"
          onChange={handleChange}
          onKeyDown={onKeyPressHandler}
          value={inputValue}
          onFocus={() => setIsSearchList(true)}
          onBlur={setOnBlur}
        />
        {isSuccess && isSearchList && (
          <S.ElasticSearch>
            {searchData.map((searchItem) => (
              <SearchItem
                searchItem={searchItem}
                key={searchItem.id.videoId}
                setSearchFromList={setSearchFromList}
              />
            ))}
          </S.ElasticSearch>
        )}
      </S.SearcherContainer>
      <S.SubmitButton onClick={handleSubmit} data-testid="search-button">
        <S.SubmitButtonIcon src={SearchImg} />
      </S.SubmitButton>
    </S.SearchBarContainer>
  );
};

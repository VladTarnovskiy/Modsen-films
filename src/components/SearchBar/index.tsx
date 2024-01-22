import { useDebounce } from '@src/hooks/useDebounce';
import { useSearchVideosQuery } from '@src/store/slices/ApiSlice';
import {
  clearVideos,
  selectSearchValue,
  setSearchValue,
} from '@src/store/slices/MainPageSlice';
import { MyLocalStorage } from '@src/utils/localStorage';
import { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchButton } from '../SearchButton';
import { SearchItem } from '../SearchItem';
import * as S from './styled';

export const SearchBar: FC = memo(function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const [inputValue, setInputValue] = useState(
    MyLocalStorage.getItem('searchValue') || ''
  );
  const [isSearchList, setIsSearchList] = useState(false);
  const debouncedValue = useDebounce<string>(inputValue, 500);
  const {
    data: searchData,
    isSuccess,
    isError,
  } = useSearchVideosQuery({
    searchValue: debouncedValue,
  });

  const handleSubmit = useCallback(
    function handleSubmit() {
      setIsSearchList(false);
      if (searchValue !== inputValue) {
        dispatch(clearVideos());
        dispatch(setSearchValue(inputValue));
        MyLocalStorage.setItem('searchValue', inputValue);
      }
    },
    [dispatch, inputValue, searchValue]
  );

  const setSearchFromList = (value: string) => {
    setInputValue(value);
    if (searchValue !== value) {
      dispatch(clearVideos());
      dispatch(setSearchValue(value));
      MyLocalStorage.setItem('searchValue', value);
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

  let elasticSearch: JSX.Element | JSX.Element[] | null = null;

  if (isSuccess && isSearchList) {
    elasticSearch = (
      <S.ElasticSearch>
        {searchData.map((searchItem) => (
          <SearchItem
            searchItem={searchItem}
            key={searchItem.id.videoId}
            setSearchFromList={setSearchFromList}
          />
        ))}
      </S.ElasticSearch>
    );
  } else if (isError && isSearchList) {
    elasticSearch = (
      <S.ElasticSearch>
        <S.ErrorContainer>Something went wrong.</S.ErrorContainer>
      </S.ElasticSearch>
    );
  }

  return (
    <S.Container data-testid="search-bar">
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
        {elasticSearch}
      </S.SearcherContainer>
      <SearchButton data-testid="search-button" handleSubmit={handleSubmit} />
    </S.Container>
  );
});

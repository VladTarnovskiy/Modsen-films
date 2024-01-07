import { ChangeEvent, FC, useState } from 'react';
import * as S from './styled';
import SearchImg from 'src/assets/Search.svg';
import {
  clearVideos,
  selectSearchValue,
  setSearchValue,
} from 'src/store/slices/MainPageSlice';
import { useDispatch, useSelector } from 'react-redux';

export const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleSubmit = () => {
    if (searchValue !== inputValue) {
      dispatch(clearVideos());
      dispatch(setSearchValue(inputValue));
      localStorage.setItem('searchValue', inputValue);
    }
  };

  const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <S.SearchBarContainer>
      <S.SearchBar
        type="search"
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={onKeyPressHandler}
        value={inputValue}
      />
      <S.SubmitButton onClick={handleSubmit}>
        <S.SubmitButtonIcon src={SearchImg} />
      </S.SubmitButton>
    </S.SearchBarContainer>
  );
};

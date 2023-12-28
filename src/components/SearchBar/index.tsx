import { ChangeEvent, FC, useState } from 'react';
import * as S from './styled';
import SearchImg from 'src/assets/Search.svg';
import { setSearchValue } from 'src/store/slices/MainPageSlice';
import { useDispatch } from 'react-redux';

export const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleSubmit = () => {
    dispatch(setSearchValue(inputValue));
    localStorage.setItem('searchValue', inputValue);
  };

  const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('here');
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

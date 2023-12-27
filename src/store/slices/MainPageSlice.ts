import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialState {
  theme: string;
  page: number;
  amountPages: number | null;
  searchValue: string;
}

const initialState: InitialState = {
  theme: 'light',
  page: 1,
  amountPages: null,
  searchValue: localStorage.getItem('searchValue') || '',
};

const userSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
    setAmountPage: (state, { payload }) => {
      state.amountPages = payload;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { setSearchValue, changePage, setAmountPage, changeTheme } =
  userSlice.actions;

export const selectSearchValue = (state: RootState) =>
  state.mainPage.searchValue;
export const selectPage = (state: RootState) => state.mainPage.page;
export const selectAmountPages = (state: RootState) =>
  state.mainPage.amountPages;
export const selectTheme = (state: RootState) => state.mainPage.amountPages;

export default userSlice.reducer;

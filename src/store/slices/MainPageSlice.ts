import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import { IVideosInfo } from 'src/interfaces/videoData';

interface InitialState {
  theme: string;
  page: number;
  amountPages: number | null;
  searchValue: string;
  // videosInfo: IVideosInfo | null;
}

const initialState: InitialState = {
  theme: 'light',
  page: 1,
  amountPages: null,
  searchValue: localStorage.getItem('searchValue') || '',
  // videosInfo: null,
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
    // setVideosInfo: (state, { payload }) => {
    //   state.videosInfo = payload;
    // },
  },
});

export const {
  setSearchValue,
  changePage,
  setAmountPage,
  changeTheme,
  // setVideosInfo,
} = userSlice.actions;

export const selectSearchValue = (state: RootState) =>
  state.mainPage.searchValue;
export const selectPage = (state: RootState) => state.mainPage.page;
export const selectAmountPages = (state: RootState) =>
  state.mainPage.amountPages;
// export const selectVideosInfo = (state: RootState) => state.mainPage.videosInfo;

export const selectTheme = (state: RootState) => state.mainPage.amountPages;

export default userSlice.reducer;

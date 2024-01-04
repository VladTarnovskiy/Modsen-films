import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IVideo } from 'src/interfaces/videoData';
// import { IVideosInfo } from 'src/interfaces/videoData';

interface InitialState {
  theme: string;
  nextPageToken: null | string;
  amountPages: number | null;
  // isLoading: boolean;
  // isError: boolean;
  searchValue: string;
  videosInfo: IVideo[];
}

const initialState: InitialState = {
  theme: 'light',
  nextPageToken: null,
  amountPages: null,
  // isLoading: false,
  // isError: false,
  searchValue: localStorage.getItem('searchValue') || '',
  videosInfo: [],
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
    setNextPageToken: (state, { payload }) => {
      state.nextPageToken = payload;
    },
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
    // setIsLoading: (state, { payload }) => {
    //   state.isLoading = payload;
    // },
    // setIsError: (state, { payload }) => {
    //   state.isError = payload;
    // },
    setVideos: (state, { payload }) => {
      // if (state.videosInfo === null) {
      //   state.videosInfo = payload;
      // } else {
      // state.isLoading = false;
      // state.isError = false;
      state.videosInfo = [...state.videosInfo].concat(payload);
      // }
    },
    clearVideos: (state) => {
      // if (state.videosInfo === null) {
      //   state.videosInfo = payload;
      // } else {
      // state.isLoading = false;
      // state.isError = false;
      state.videosInfo = [];
      // }
    },
  },
});

export const {
  setSearchValue,
  setNextPageToken,
  setAmountPage,
  changeTheme,
  setVideos,
  clearVideos,
  // setIsError,
  // setIsLoading,
} = userSlice.actions;

export const selectSearchValue = (state: RootState) =>
  state.mainPage.searchValue;
export const selectNextPageToken = (state: RootState) =>
  state.mainPage.nextPageToken;
// export const selectIsLoading = (state: RootState) => state.mainPage.isLoading;
// export const selectIsError = (state: RootState) => state.mainPage.isError;
export const selectAmountPages = (state: RootState) =>
  state.mainPage.amountPages;
export const selectVideos = (state: RootState) => state.mainPage.videosInfo;

export const selectTheme = (state: RootState) => state.mainPage.amountPages;

export default userSlice.reducer;

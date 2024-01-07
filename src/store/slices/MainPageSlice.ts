import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IVideo } from 'src/interfaces/videoData';
// import { IVideosInfo } from 'src/interfaces/videoData';

interface InitialState {
  isLightTheme: boolean;
  nextPageToken: null | string;
  triggeredNextPageToken: null | string;
  amountPages: number | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  searchValue: string;
  videosInfo: IVideo[];
}

const initialState: InitialState = {
  isLightTheme: true,
  nextPageToken: null,
  triggeredNextPageToken: null,
  amountPages: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
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
    setTriggeredNextPageToken: (state, { payload }) => {
      state.triggeredNextPageToken = payload;
    },
    changeTheme: (state, { payload }) => {
      state.isLightTheme = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setIsError: (state, { payload }) => {
      state.isError = payload;
      state.isSuccess = false;
      state.isLoading = false;
    },
    setIsSuccess: (state, { payload }) => {
      state.isSuccess = payload;
      state.isError = false;
    },
    setVideos: (state, { payload }) => {
      // if (state.videosInfo === null) {
      //   state.videosInfo = payload;
      // } else {
      state.isLoading = false;
      state.isError = false;
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
  setIsError,
  setIsLoading,
  setIsSuccess,
  setTriggeredNextPageToken,
} = userSlice.actions;

export const selectSearchValue = (state: RootState) =>
  state.mainPage.searchValue;
export const selectNextPageToken = (state: RootState) =>
  state.mainPage.nextPageToken;
export const selectTriggeredNextPageToken = (state: RootState) =>
  state.mainPage.triggeredNextPageToken;
export const selectIsLoading = (state: RootState) => state.mainPage.isLoading;
export const selectIsError = (state: RootState) => state.mainPage.isError;
export const selectIsSuccess = (state: RootState) => state.mainPage.isSuccess;

export const selectAmountPages = (state: RootState) =>
  state.mainPage.amountPages;
export const selectVideos = (state: RootState) => state.mainPage.videosInfo;

export const selectIsLightTheme = (state: RootState) =>
  state.mainPage.isLightTheme;

export default userSlice.reducer;

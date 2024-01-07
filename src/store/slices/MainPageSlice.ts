import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IVideo } from 'src/interfaces/videoData';

interface InitialState {
  isLightTheme: boolean;
  nextPageToken: null | string;
  triggeredNextPageToken: null | string;
  isLoading: boolean;
  filmsFilter: string;
  isError: boolean;
  isSuccess: boolean;
  searchValue: string;
  videosInfo: IVideo[];
}

const initialState: InitialState = {
  isLightTheme: true,
  nextPageToken: null,
  triggeredNextPageToken: null,
  isLoading: false,
  filmsFilter: 'All',
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
    setNextPageToken: (state, { payload }: PayloadAction<string | null>) => {
      state.nextPageToken = payload;
    },
    setTriggeredNextPageToken: (
      state,
      { payload }: PayloadAction<string | null>
    ) => {
      state.triggeredNextPageToken = payload;
    },
    changeTheme: (state, { payload }: PayloadAction<boolean>) => {
      state.isLightTheme = payload;
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setIsError: (state, { payload }: PayloadAction<boolean>) => {
      state.isError = payload;
      state.isSuccess = false;
      state.isLoading = false;
    },
    setIsSuccess: (state, { payload }: PayloadAction<boolean>) => {
      state.isSuccess = payload;
      state.isError = false;
    },
    changeFilmsFilter: (state, { payload }: PayloadAction<string>) => {
      state.filmsFilter = payload;
    },
    setVideos: (state, { payload }: PayloadAction<IVideo[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.videosInfo = [...state.videosInfo].concat(payload);
    },
    clearVideos: (state) => {
      state.isLoading = true;
      state.videosInfo = [];
    },
  },
});

export const {
  setSearchValue,
  setNextPageToken,
  changeTheme,
  changeFilmsFilter,
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
export const selectFilmsFilter = (state: RootState) =>
  state.mainPage.filmsFilter;
export const selectVideos = (state: RootState) => state.mainPage.videosInfo;
export const selectIsLightTheme = (state: RootState) =>
  state.mainPage.isLightTheme;

export default userSlice.reducer;

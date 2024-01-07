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
    },
    changeFilmsFilter: (state, { payload }: PayloadAction<string>) => {
      state.filmsFilter = payload;
    },
    setVideos: (state, { payload }: PayloadAction<IVideo[]>) => {
      state.videosInfo = [...state.videosInfo].concat(payload);
    },
    clearVideos: (state) => {
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
export const selectFilmsFilter = (state: RootState) =>
  state.mainPage.filmsFilter;
export const selectVideos = (state: RootState) => state.mainPage.videosInfo;
export const selectIsLightTheme = (state: RootState) =>
  state.mainPage.isLightTheme;

export default userSlice.reducer;

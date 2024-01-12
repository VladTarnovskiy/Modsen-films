import { http, HttpResponse } from 'msw';
import { searchResultMock } from '../mocks/searchResult';
import { videosInfoMock } from '../mocks/videosInfo';
import { SEARCH_URL, VIDEO_DATA_URL } from 'src/constants/api';

export const handlers = [
  http.get(SEARCH_URL, () => {
    return HttpResponse.json(searchResultMock);
  }),
  http.get(VIDEO_DATA_URL, async () => {
    return HttpResponse.json(videosInfoMock);
  }),
];

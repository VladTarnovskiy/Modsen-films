import { http, HttpResponse } from 'msw';
import { searchResultMock } from '../mocks/searchResult';
import { videosInfoMock } from '../mocks/videosInfo';
import { videoDataMock } from '../mocks/video';

export const handlers = [
  http.get('youtube.googleapis.com/youtube/v3/search', () => {
    return HttpResponse.json(searchResultMock);
  }),
  http.get('https://www.googleapis.com/youtube/v3/videos', async () => {
    return HttpResponse.json(videosInfoMock);
  }),
  http.get(
    'https://www.googleapis.com/youtube/v3/videos/:videoID',
    async () => {
      return HttpResponse.json(videoDataMock);
    }
  ),
];

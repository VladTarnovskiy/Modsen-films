import { ISearchResultResponse } from '@src/interfaces/searchVideo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVideo, IVideosInfo } from '@src/interfaces/videoData';
import { KEY, SEARCH_URL, VIDEO_DATA_URL } from '@src/constants/api';
import { uid } from '@src/utils/uidGenerator';
import { ISearch, ISearchItem } from '@src/interfaces/search';

interface IPageToken {
  pageToken: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getSearchInfo: builder.query<
      IVideosInfo,
      { searchValue: string; pageToken: string | null; filterValue: string }
    >({
      async queryFn(arg, _queryApi, _extraOptions, fetchBaseQuery) {
        const pageToken: IPageToken | null =
          arg.pageToken !== null ? { pageToken: arg.pageToken } : null;
        const fetchSearchInfo = await fetchBaseQuery({
          url: SEARCH_URL,
          params: {
            key: KEY,
            q: `${arg.searchValue} + ' ' + ${
              arg.filterValue === 'All' ? '' : arg.filterValue
            }`,
            part: 'id',
            maxResults: '16',
            type: 'video',
            videoEmbeddable: 'true',
            ...pageToken,
          },
        });

        if (fetchSearchInfo.error) throw fetchSearchInfo.error;

        const searchResp = fetchSearchInfo.data as ISearchResultResponse;
        let ids = '';
        searchResp.items.forEach((item) => {
          ids += `${item.id.videoId},`;
        });
        ids = ids.slice(0, -1);

        const fetchVideosInfo = await fetchBaseQuery({
          url: VIDEO_DATA_URL,
          params: {
            key: KEY,
            part: 'snippet,statistics,player,contentDetails',
            id: ids,
          },
        });

        if (fetchVideosInfo.error) throw fetchVideosInfo.error;

        const videosInfo = fetchVideosInfo.data as IVideosInfo;
        videosInfo.items.map((video) => (video.keyID = uid()));

        const nextPageToken = searchResp.nextPageToken ?? null;

        return { data: { ...videosInfo, nextPageToken } };
      },
    }),
    getVideoData: builder.query<IVideo, { videoID: string }>({
      query: ({ videoID }) => ({
        url: VIDEO_DATA_URL,
        params: {
          key: KEY,
          part: 'snippet,statistics,player,contentDetails',
          id: videoID,
        },
      }),
      transformResponse: (response: IVideosInfo): IVideo => {
        return response.items[0];
      },
    }),
    searchVideos: builder.query<ISearchItem[], { searchValue: string }>({
      query: ({ searchValue }) => ({
        url: SEARCH_URL,
        params: {
          key: KEY,
          q: searchValue,
          part: 'snippet',
          maxResults: '10',
        },
      }),
      transformResponse: (response: ISearch): ISearchItem[] => {
        response.items.map((item) => (item.id.videoId = uid()));
        return response.items;
      },
    }),
  }),
});

export const {
  useGetSearchInfoQuery,
  useGetVideoDataQuery,
  useSearchVideosQuery,
} = apiSlice;

import { ISearchResultResponse } from 'src/interfaces/searchVideo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVideo, IVideosInfo } from 'src/interfaces/videoData';
import { v4 as uuidv4 } from 'uuid';
import { KEY } from 'src/constants/api';

interface IPageToken {
  pageToken: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://',
  }),
  endpoints: (builder) => ({
    getSearchInfo: builder.query<
      IVideosInfo,
      { searchValue: string; pageToken: string | null }
    >({
      async queryFn(arg, _queryApi, _extraOptions, fetchWithBQ) {
        const pageToken: IPageToken | null =
          arg.pageToken !== null ? { pageToken: arg.pageToken } : null;
        const fetchSearchInfo = await fetchWithBQ({
          url: 'youtube.googleapis.com/youtube/v3/search',
          params: {
            key: KEY,
            q: arg.searchValue,
            part: 'id',
            maxResults: '16',
            type: 'video',
            videoEmbeddable: 'true',
            videoType: 'movie',
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

        const fetchVideosInfo = await fetchWithBQ({
          url: 'www.googleapis.com/youtube/v3/videos',
          params: {
            key: KEY,
            part: 'snippet,statistics,player,contentDetails',
            id: ids,
          },
        });

        if (fetchVideosInfo.error) throw fetchVideosInfo.error;

        const videosInfo = fetchVideosInfo.data as IVideosInfo;
        videosInfo.items.map((video) => (video.keyID = uuidv4()));
        const nextPageToken = searchResp.nextPageToken ?? null;

        return { data: { ...videosInfo, nextPageToken } };
      },
    }),
    getVideoData: builder.query<IVideo, { videoID: string }>({
      query: ({ videoID }) => ({
        url: 'www.googleapis.com/youtube/v3/videos',
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
  }),
});

export const { useGetSearchInfoQuery, useGetVideoDataQuery } = apiSlice;

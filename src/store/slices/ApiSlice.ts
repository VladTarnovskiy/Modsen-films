import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  SEARCH_URL,
  VIDEO_DATA_URL,
  YOUTUBE_API_KEY,
} from '@src/constants/api';
import { ISearch, ISearchItem } from '@src/interfaces/search';
import { ISearchResultResponse } from '@src/interfaces/searchVideo';
import {
  ITransformedVideosInfo,
  IVideoDetails,
  IVideosInfo,
} from '@src/interfaces/videoData';
import { getDate } from '@src/utils/getDate';
import { getDuration } from '@src/utils/getDuration';
import { uid } from '@src/utils/uidGenerator';

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
      ITransformedVideosInfo,
      { searchValue: string; pageToken: string | null; filterValue: string }
    >({
      async queryFn(arg, _queryApi, _extraOptions, fetchBaseQuery) {
        const pageToken: IPageToken | null =
          arg.pageToken !== null ? { pageToken: arg.pageToken } : null;
        const fetchSearchInfo = await fetchBaseQuery({
          url: SEARCH_URL,
          params: {
            key: YOUTUBE_API_KEY,
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
            key: YOUTUBE_API_KEY,
            part: 'snippet,statistics,player,contentDetails',
            id: ids,
          },
        });

        if (fetchVideosInfo.error) throw fetchVideosInfo.error;

        const videosInfo = fetchVideosInfo.data as IVideosInfo;

        const transformedVideosInfo = videosInfo.items.map((video) => {
          const videoInfo = {
            id: video.id,
            keyID: uid(),
            title: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
            defaultImg: video.snippet.thumbnails.default.url,
            mediumImg: video.snippet.thumbnails.medium.url,
            publishedAt: getDate(video.snippet.publishedAt),
            duration: getDuration(video.contentDetails.duration),
            player: `https:${video.player.embedHtml.split('"')[5]}?autoplay=1`,
          };
          return videoInfo;
        });

        const nextPageToken = searchResp.nextPageToken ?? null;

        return { data: { videos: transformedVideosInfo, nextPageToken } };
      },
    }),
    getVideoData: builder.query<IVideoDetails, { videoID: string }>({
      query: ({ videoID }) => ({
        url: VIDEO_DATA_URL,
        params: {
          key: YOUTUBE_API_KEY,
          part: 'snippet,statistics,player,contentDetails',
          id: videoID,
        },
      }),
      transformResponse: (response: IVideosInfo): IVideoDetails => {
        const transformedVideoInfo = response.items.map((video) => {
          const videoInfo = {
            id: video.id,
            title: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
            defaultImg: video.snippet.thumbnails.default.url,
            mediumImg: video.snippet.thumbnails.medium.url,
            publishedAt: getDate(video.snippet.publishedAt),
            duration: getDuration(video.contentDetails.duration),
            player: `https:${video.player.embedHtml.split('"')[5]}?autoplay=1`,
            viewCount: video.statistics.viewCount,
            likeCount: video.statistics.likeCount,
            description: video.snippet.description,
          };
          return videoInfo;
        });
        return transformedVideoInfo[0];
      },
    }),
    searchVideos: builder.query<ISearchItem[], { searchValue: string }>({
      query: ({ searchValue }) => ({
        url: SEARCH_URL,
        params: {
          key: YOUTUBE_API_KEY,
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

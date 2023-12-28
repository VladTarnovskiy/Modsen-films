import {
  // ITransformedSearchResultResponse,
  ISearchResultResponse,
} from 'src/interfaces/searchVideo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVideosInfo } from 'src/interfaces/videoData';

const KEY = 'AIzaSyB9KMr47y-jQHDR7beRpnyPbQgKoof2Vho';
// const searchURL =
//   'https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=20&type=video&videoEmbeddable=true&videoType=movie&key=[YOUR_API_KEY]';
// const youtubeApiURL = 'https://youtube.googleapis.com/youtube/v3';
// const videosDataURL =
//   'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,player';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://',
  }),
  endpoints: (builder) => ({
    getSearchInfo: builder.query<
      IVideosInfo,
      { searchValue: string; page?: number }
    >({
      // query: ({ searchValue }) => ({
      //   url: 'youtube.googleapis.com/youtube/v3/search',
      //   params: {
      //     key: KEY,
      //     q: searchValue,
      //     part: 'id',
      //     maxResults: '16',
      //     type: 'video',
      //     videoEmbeddable: 'true',
      //     videoType: 'movie',
      //     // pageToken: page,
      //   },
      // }),
      async queryFn(arg, _queryApi, _extraOptions, fetchWithBQ) {
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
            // pageToken: page,
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
            part: 'snippet,statistics,player',
            id: ids,
          },
        });

        if (fetchVideosInfo.error) throw fetchVideosInfo.error;

        const videosInfo = fetchVideosInfo.data as IVideosInfo;
        const nextPageToken = searchResp.nextPageToken ?? null;

        return { data: { ...videosInfo, nextPageToken } };

        // const transformedResponse = {
        //   ids: ids.slice(0, -1),
        //   nextPageToken: response.nextPageToken,
        // };
      },
      // transformResponse: (
      //   response: ISearchResultResponse
      // ): ITransformedSearchResultResponse => {
      //   let ids = '';
      //   response.items.forEach((item) => {
      //     ids += `${item.id.videoId},`;
      //   });
      //   const transformedResponse = {
      //     ids: ids.slice(0, -1),
      //     nextPageToken: response.nextPageToken,
      //   };
      //   return transformedResponse;
      // },
    }),
    // getVideosInfo: builder.query<IVideosInfo, { ids?: string }>({
    //   query: ({ ids }) => {
    //     return {
    //       url: 'www.googleapis.com/youtube/v3/videos',
    //       params: {
    //         key: KEY,
    //         part: 'snippet,statistics,player',
    //         id: ids,
    //       },
    //     };
    //   },
    // }),
    // getxInfo: builder.query<IVideosInfo, { ids?: string }>({
    //   async queryFn(arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     const usdMResponse = await fetchWithBQ({
    //       url: 'www.googleapis.com/youtube/v3/videos',
    //       params: {
    //         key: KEY,
    //         part: 'snippet,statistics,player',
    //         id: arg.ids,
    //       },
    //     });
    //     const usdM = usdMResponse.data as ICoinQuery;
    //     for (const symbol of usdM.symbols) {
    //       symbol.type = 'futures';
    //     }
    //   },
    // }),
  }),
});

export const {
  useGetSearchInfoQuery,
  // useGetVideosInfoQuery
} = apiSlice;

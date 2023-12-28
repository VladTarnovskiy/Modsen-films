export interface ISearchResultResponse {
  kind: string;
  etag: string;
  nextPageToken: string | undefined;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISearchResultResponseItem[];
}

export interface ISearchResultResponseItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
}

export interface ITransformedSearchResultResponse {
  nextPageToken: string;
  ids: string;
}

export interface ISearch {
  kind: string;
  etag: string;
  nextPageToken: string | undefined;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISearchItem[];
}

export interface ISearchItem {
  etag: string;
  kind: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

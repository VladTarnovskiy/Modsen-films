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
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

export interface IVideosInfo {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: IVideoResponse[];
}

export interface IVideoResponse {
  kind: string;
  etag: string;
  id: string;
  contentDetails: ContentDetails;
  snippet: Snippet;
  statistics: Statistics;
  player: {
    embedHtml: string;
  };
}

interface ContentDetails {
  duration: string;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface Thumbnails {
  url: string;
  width: number;
  height: number;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnails;
    medium: Thumbnails;
    high: Thumbnails;
    standard: Thumbnails;
    maxres: Thumbnails;
  };
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface ITransformedVideosInfo {
  videos: IVideo[];
  nextPageToken: string | null;
}

export interface IVideo {
  id: string;
  keyID: string;
  title: string;
  channelTitle: string;
  defaultImg: string;
  mediumImg: string;
  publishedAt: string;
  duration: string;
  player: string;
}

export interface IVideoDetails {
  id: string;
  title: string;
  channelTitle: string;
  defaultImg: string;
  mediumImg: string;
  publishedAt: string;
  duration: string;
  player: string;
  viewCount: string;
  likeCount: string;
  description: string;
}

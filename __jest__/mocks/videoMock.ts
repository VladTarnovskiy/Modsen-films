import { IVideo } from '@src/interfaces/videoData';

export const videoDataMock: IVideo = {
  kind: 'youtube#video',
  etag: 'I3OcX3-u8TTrzaK7o48EmeN9ZE8',
  id: '3bhkYoMWTFE',
  snippet: {
    publishedAt: '2023-07-26T13:33:50Z',
    channelId: 'UCkMrzpvOdM2Ndc21jgbj8NA',
    title: '😹Cats Doing Cat Things😹 (3)',
    description:
      '#cat #cats #catlover #catvideos #catlovers #catshorts #funny #funnyvideo #funnyshorts #funnyvideos #funnycat #cute #cutecat #fyp #fypシ',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/3bhkYoMWTFE/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/3bhkYoMWTFE/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/3bhkYoMWTFE/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/3bhkYoMWTFE/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/3bhkYoMWTFE/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    channelTitle: 'catvid-19',
    categoryId: '15',
    liveBroadcastContent: 'none',
    localized: {
      title: '😹Cats Doing Cat Things😹 (3)',
      description:
        '#cat #cats #catlover #catvideos #catlovers #catshorts #funny #funnyvideo #funnyshorts #funnyvideos #funnycat #cute #cutecat #fyp #fypシ',
    },
    tags: [],
    defaultAudioLanguage: '',
  },
  contentDetails: {
    duration: 'PT18S',
  },
  statistics: {
    viewCount: '174988618',
    likeCount: '5497058',
    favoriteCount: '0',
    commentCount: '34309',
  },
  player: {
    embedHtml:
      '<iframe width="480" height="270" src="//www.youtube.com/embed/3bhkYoMWTFE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  keyID: '1fc49129-52e8-45dc-a283-214efa9e97db',
};

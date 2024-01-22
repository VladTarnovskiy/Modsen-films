import { searchResultMock } from '../mocks/searchResult';
import { videosInfoMock } from '../mocks/videosInfo';

afterEach(() => {
  cy.window().trigger('unload');
});

beforeEach(() => {
  cy.intercept('GET', 'https://youtube.googleapis.com/youtube/v3/search*', {
    statusCode: 200,
    body: searchResultMock,
  });
  cy.intercept('GET', 'https://www.googleapis.com/youtube/v3/videos*', {
    statusCode: 200,
    body: videosInfoMock,
  });
});

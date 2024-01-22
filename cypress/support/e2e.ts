import { SEARCH_URL, VIDEO_DATA_URL } from '../../src/constants/api';
import { searchResultMock } from '../mocks/searchResult';
import { videosInfoMock } from '../mocks/videosInfo';

afterEach(() => {
  cy.window().trigger('unload');
});

beforeEach(() => {
  cy.intercept('GET', `${SEARCH_URL}*`, {
    statusCode: 200,
    body: searchResultMock,
  });
  cy.intercept('GET', `${VIDEO_DATA_URL}*`, {
    statusCode: 200,
    body: videosInfoMock,
  });
});

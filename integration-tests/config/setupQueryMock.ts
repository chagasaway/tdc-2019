import nock from 'nock';
import { QueryMock } from 'graphql-query-test-mock';
import { GRAPHQL_API_URL } from './fetchQuery';

export function setupQueryMock() {
  cleanupNock();
  const queryMock = new QueryMock();
  queryMock.setup(GRAPHQL_API_URL);
  return queryMock;
}

function cleanupNock() {
  nock.cleanAll();
  nock.enableNetConnect();
}

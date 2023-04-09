import { generalURL, URL } from '../constants/constants';
import { rest } from 'msw';
import mockDataSearch from './mockDataSearch.json';
import mockDataCard from './mockDataCard.json';
import mockDataGeneral from './mockDataGeneral.json';

export const handlers = [
  rest.get(`${generalURL}/search?q=licufer&page=1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDataSearch));
  }),
  rest.get(`${generalURL}/show-details?q=2543`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDataCard));
  }),
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDataGeneral));
  }),
];

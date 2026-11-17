import termekController from './termekController.js';
im
import {expect, jest, test} from '@jest/globals';
const mocknewModel = jest.mock('../models/termekModel.js',);
test('sample test', async () => {
  expect(true).toBe(true);
  const resultMock={};
  mocknewModel.getAll=jest.fn().mockResolvedValue([{id:1,nev:"termek1"},{id:2,nev:"termek2"}]);
  await termekController.getALL({params: {}},resultMock);
});

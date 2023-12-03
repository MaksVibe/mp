import { CopyStoreType } from './copy.types';
import global from './global.json';
import homePage from './homePage.json';

export const getCopy = () => {
  return {
    global: global as CopyStoreType['copy']['global'],
    homePage: homePage as CopyStoreType['copy']['homePage'],
  };
};

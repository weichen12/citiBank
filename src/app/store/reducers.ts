import { createReducer, on } from '@ngrx/store';

import {  InfoAll} from '../model/bookmark.entity';
import { BookmarkActions } from './actions';
import {infoApi} from '../_mock/appInfo';
export const cardInfo: InfoAll = infoApi.cardInfo();
const reducer = createReducer(cardInfo,
  on(BookmarkActions.getCardInfo , (state, { time }) => ({
    ...state
  })
 )
);

export function bookmarkReducer(state, action) {
  return reducer(state, action);
}

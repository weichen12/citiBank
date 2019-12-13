import { createSelector } from '@ngrx/store';
import { InfoAll} from '../model/bookmark.entity';
import { CardModel , ButtonList , List } from '../model/group.enum';
export const getAllCardInfo = (state: any) => state.bookmarks;
// export const getALlButtonList = (state: any) => state.bookmarks.buttonList;
export const getCardInfo = createSelector(
  getAllCardInfo,

  (state: InfoAll) => {
    console.log(state);
    return state;
  }
);


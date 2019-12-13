import { createAction, props } from '@ngrx/store';


const getCardInfo = createAction('[citiBank] get cardInfo', props<{ time: string }>());
export const BookmarkActions = {
  getCardInfo
};

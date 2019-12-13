import { Injectable, OnInit } from '@angular/core';
import { infoApi } from './_mock/appInfo';
import { Store, select} from '@ngrx/store';
import { InfoAll} from './model/bookmark.entity';
import { getCardInfo } from './store/selectors';
// import * as fromStore from './store/index';
@Injectable()
export class AppService {
  title = '...';
  constructor(private store: Store< InfoAll >) {
    this.listen();
  }
  listen() {
    this.title = '收支';
    // this.store.dispatch(
    //   {
    //     type: fromStore.BookmarkActions,
    //     payload: {
    //       year: '100',
    //       month: 'string',
    //       pay: 'string',
    //       income: 'string',
    //       accountBalance: 'string'
    //     }
    //   }
    // )
    // axios.get('/api/msdk/proxy/query_common_credit').then(res => {
    //   console.log(res);

    //   console.log('111');
    // });
  }

  getAllState() {
    return this.store.pipe( select ( getCardInfo ) );
  }

}

import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AppService } from './app.service';
import { CardModel , ButtonList , List } from './model/group.enum';
import { ToastService } from 'ng-zorro-antd-mobile';
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public card: CardModel ;
  public buttonList: Array<ButtonList>;
  public list: Array<List>;
  name = '选择';
  value = new Date();

  constructor( private toast: ToastService, public appService: AppService) { }

  ngOnInit() {
    this.appService.getAllState().subscribe(state => {
      this.card = state.card;
      this.buttonList = state.buttonList;
      this.list = state.list;
    });
  }
  currentDateFormat(date, format: string = 'yyyy-mm'): any {
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
      .replace('yyyy', date.getFullYear())
      .replace('mm', pad(date.getMonth() + 1))
  }

  onOk(result: Date) {
    this.name = this.currentDateFormat(result);
    this.value = result;
  }

  getCick(msg) {
    console.log('122');
    this.toast.info(`刚刚点击${msg}`, 800, null, false);
  }
}

import { Component, OnInit , Input} from '@angular/core';
import { List } from '../../model/group.enum';
import { ToastService } from 'ng-zorro-antd-mobile';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  constructor(private toast: ToastService) { }
  ngOnInit() {
  }
  lookBillDetail($evnet: string ) {
    this.toast.info(`去往${$evnet}的消费详情`, 1000, null, false);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from '../../model/group.enum';
import { ToastService } from 'ng-zorro-antd-mobile';
@Component({
  selector: 'app-card-box',
  templateUrl: './cardBox.component.html',
  styleUrls: ['./cardBox.component.css']
})

export class CardBoxComponent implements OnInit {
  @Input() card: CardModel;
  constructor(private toast: ToastService ) { }

  ngOnInit() {
  }
  goSet() {
    this.toast.info('刚刚点击前去设置按钮', 800, null, false);
  }
}

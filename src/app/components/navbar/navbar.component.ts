import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private toast: ToastService , public appService: AppService) { }
  ngOnInit() {
  }
  // 返回按钮
  onLeftClick() {
    const toast = this.toast.info('返回上页面', 800, null, false);
  }
  // 右侧选择
  onSelect(event) {
    console.log(event);
  }
  //  右侧
  onVisibleChange(event) {
    console.log(event);
  }
}

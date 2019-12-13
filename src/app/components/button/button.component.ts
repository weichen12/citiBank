import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ButtonList } from '../../model/group.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonList: Array<ButtonList>;
  @Output() private outerButton = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  clickButton(item) {
    this.outerButton.emit(item.text);
  }
}

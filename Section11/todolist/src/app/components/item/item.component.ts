import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  index: number; // index
  @Input()
  title: string; // 标题
  @Input()
  done: boolean; // 状态
  @Output()
  checkItemEvent = new EventEmitter<Object>(); // dialog显示状态改变事件
  @Output()
  deleteItemEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  checkItem(): void {
    const data: Object = {
      index: this.index,
      title: this.title,
      done: this.done
    };
    this.checkItemEvent.emit(data);
    // this.checkItem(this.index);
    // this.$emit("checkItem", this.index, this.done, this.title);
  }

  deleteItem(): void {
    const data: Object = {
      index: this.index,
      done: this.done
    };
    this.deleteItemEvent.emit(data);
  }
}

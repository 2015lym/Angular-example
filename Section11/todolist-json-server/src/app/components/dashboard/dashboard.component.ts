import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // 添加 Todo 标题
  private todoTitle = '';
  // 数据数组
  private dataArray: Array<Object> = [];

  // 待办数组
  private doingArray: Array<Object> = [];
  // 完成数组
  private doneArray: Array<Object> = [];

  modalIsVisible: boolean = false;
  editTitle: string = '';
  editDate: string = '';
  editDone: boolean = false;
  editIndex: number = 0;

  constructor(private message: NzMessageService) { }

  // 生命周期
  ngOnInit() {
    this.getTodoList();
  }

  // 获取列表数据
  private getTodoList(): void {
    const dataString: string = localStorage.getItem('todo-list');
    if (dataString != null) {
      this.dataArray = JSON.parse(dataString);
      for (let i = 0; i < this.dataArray.length; i++) {
        const element: any = this.dataArray[i];
        if (element.done === true) {
          this.doneArray.push(element);
        } else {
          this.doingArray.push(element);
        }
      }
    }
  }

  // 添加Todo
  private addTodo(): void {
    this.editTitle = '';
    this.editDate = '';
    this.editDone = false;
    this.editIndex = 0;
    this.modalIsVisible = true;
  }

  // 添加、编辑事件
  addTodoEvent(data: Object) {
    const item = {
      title: data['title'],
      date: data['date'],
      done: data['done']
    };

    if (data['done'] == true) {
      this.doneArray[data['index']] = item;
    } else {
      if (data['isEdit'] == true) {
        this.doingArray[data['index']] = item;
      } else {
        this.doingArray.push(item);
      }
    }
    this.dataArray = this.doingArray.concat(this.doneArray);
    localStorage.setItem('todo-list', JSON.stringify(this.dataArray));
  }

  // 打钩
  private checkItem(data: Object) {
    const index: number = data['index'];
    const done: boolean = data['done'];
    const newItem = {
      title: data['title'],
      date: data['date'],
      done: done
    };
    if (done) {
      this.doingArray.splice(index, 1);
      this.doneArray.push(newItem);
    } else {
      this.doneArray.splice(index, 1);
      this.doingArray.push(newItem);
    }
    this.dataArray = this.doingArray.concat(this.doneArray);
    localStorage.setItem('todo-list', JSON.stringify(this.dataArray));
  }

  // 编辑项目
  private editItem(data: Object) {
    this.editTitle = data['title'];
    this.editDate = data['date'];
    this.editDone = data['done'];
    this.editIndex = data['index'];
    this.modalIsVisible = true;
  }

  // 删除项目
  private deleteItem(data: Object) {
    const index: number = data['index'];
    const done: boolean = data['done'];
    if (done) {
      this.doneArray.splice(index, 1);
    } else {
      this.doingArray.splice(index, 1);
    }
    this.dataArray = this.doingArray.concat(this.doneArray);
    localStorage.setItem('todo-list', JSON.stringify(this.dataArray));
  }

}

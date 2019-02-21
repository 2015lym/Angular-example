import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
    if (this.todoTitle === '') {
      // this.$message({
      //   type: 'info',
      //   message: '请输入标题'
      // });
    } else {
      const item = {
        done: false,
        title: this.todoTitle
      };
      this.doingArray.push(item);
      this.dataArray.push(item);
      this.todoTitle = '';
      localStorage.setItem('todo-list', JSON.stringify(this.dataArray));
    }
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

  // 打钩
  private checkItem(data: Object) {
    const index: number = data['index'];
    const title: boolean = data['title'];
    const done: boolean = data['done'];
    const newItem = {
      done: done,
      title: title
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
}

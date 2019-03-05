import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // 数据数组
  private dataArray: Array<Object> = [];

  // 待办数组
  private doingArray: Array<Object> = [];
  // 完成数组
  private doneArray: Array<Object> = [];

  modalIsVisible: boolean = false;
  editData: Object = {};

  constructor(private message: NzMessageService, private http: HttpClient) { }

  // 生命周期
  ngOnInit() {
    this.getTodoList();
  }

  // 获取列表数据
  private getTodoList(): void {
    this.http.get('http://localhost:3000/todos').subscribe((res: Array<Object>) => {
      this.dataArray = res;
      this.doingArray = [];
      this.doneArray = [];
      for (let i = 0; i < this.dataArray.length; i++) {
        const element: any = this.dataArray[i];
        if (element.done === true) {
          this.doneArray.push(element);
        } else {
          this.doingArray.push(element);
        }
      }
    });
  }

  // 添加Todo
  private addTodo(): void {
    this.editData = {}
    this.modalIsVisible = true;
  }

  // 添加、编辑事件
  addTodoEvent(data: Object) {
    if (data['done'] == true) {
      this.changeItemNetRequest(data);
    } else {
      if (data['isEdit'] == true) {
        this.changeItemNetRequest(data);
      } else {
        this.http.post('http://localhost:3000/todos', data).subscribe((res) => {
          this.getTodoList();
        });
      }
    }
  }

  // 打钩
  private checkItem(data: Object) {
    this.changeItemNetRequest(data);
  }

  // 修改的网络请求
  changeItemNetRequest(data: Object) {
    this.http.put('http://localhost:3000/todos/' + data['id'], data).subscribe((res) => {
      this.getTodoList();
    });
  }

  // 编辑项目
  private editItem(data: Object) {
    this.editData = data;
    this.modalIsVisible = true;
  }

  // 删除项目
  private deleteItem(data: Object) {
    this.http.delete('http://localhost:3000/todos/' + data['id']).subscribe((res) => {
      this.getTodoList();
    });
  }
}

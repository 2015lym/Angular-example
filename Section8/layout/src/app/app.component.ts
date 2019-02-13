import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layout';
  items: Array<Object> = [];

  constructor() {
    this.hot();
  }

  hot() {
    this.items = [
      { name: '电视', path: 'tv' },
      { name: '可乐', path: 'cola' },
      { name: '咖啡', path: 'coffee' }
    ];
  }

  drinks() {
    this.items = [
      { name: '可乐', path: 'cola' },
      { name: '咖啡', path: 'coffee' }
    ];
  }

  livingGoods() {
    this.items = [
      { name: '电视', path: 'tv' },
      { name: '吸尘器', path: 'cleaner' }
    ];
  }
}

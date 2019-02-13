import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
  selectedValue = '';

  constructor(private router: Router) {
  }

  routerToC() {
    this.router.navigate(['/C']);
  }

  valueChange() {
    if (this.selectedValue === 'student') {
      this.router.navigate(['/student'], { queryParams: { name: '张三' } });
    } else if (this.selectedValue === 'teacher') {
      this.router.navigate(['/teacher', '李四']);
    } else {
      this.router.navigate(['/parent']);
    }
  }
}

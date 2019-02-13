import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  selectedValue = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  valueChange() {
    if (this.selectedValue === 'student') {
      this.router.navigate(['/C/student'], { queryParams: { name: '张三' } });
    } else if (this.selectedValue === 'teacher') {
      this.router.navigate(['/C/teacher', '李四']);
    } else {
      this.router.navigate(['/C/parent']);
    }
  }
}

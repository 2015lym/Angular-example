import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  name: '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['name'];
  }
}

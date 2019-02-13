import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name: '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.data['name'];
  }
}

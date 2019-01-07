import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.get('https://jsonplaceholder.typicode.com/todos/1', { headers: headers }).subscribe((res) => {
      console.log(res);
    });
  }
}

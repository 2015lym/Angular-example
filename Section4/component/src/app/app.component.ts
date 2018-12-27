import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component';
  clickEvent = '';

  modalIsVisible = false;

  showModal(): void {
    this.modalIsVisible = true;
  }

  getClickEvent(eventName: string) {
    this.clickEvent = eventName;
  }

}

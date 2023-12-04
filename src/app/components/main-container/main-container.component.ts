import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent {
  serverResponse: string = '';
  plainPass: string;

  encrypt(e: Event): void {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/encrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plainPass: this.plainPass
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.serverResponse = data.message;
      });
  }

  verify(e: Event): void {
    e.preventDefault();
  }
}

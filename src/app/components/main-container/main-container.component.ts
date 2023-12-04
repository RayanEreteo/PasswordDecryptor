import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent {
  hashingResponse: string = '';
  verifyResponse: string = '';

  plainPass: string;

  hashToVerify: string;
  plainPassVerify: string;
  
  constructor() {}

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
        if (data.success == false) {
          this.hashingResponse = data.message;
          console.log("test")
        }else{
          this.hashingResponse = data.hash;
        }
      });
  }

  verify(e: Event): void {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plainPass: this.plainPassVerify,
        hash: this.hashToVerify
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent {
  hashingResponse: string = '';
  plainPass: string;

  verifyResponse: any;
  hashToVerify: string;
  plainPassVerify: string;

  serverLoading: boolean = false;
  
  constructor() {}

  encrypt(e: Event): void {
    e.preventDefault();
    this.serverLoading = true;
    fetch('https://bcrypt-encrypt-service.onrender.com/encrypt', {
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
        this.serverLoading = false;
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
    this.serverLoading = true;
    fetch('https://bcrypt-encrypt-service.onrender.com/verify', {
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
        this.serverLoading = false
        this.verifyResponse = data;
        console.log(data)
      });
  }
}

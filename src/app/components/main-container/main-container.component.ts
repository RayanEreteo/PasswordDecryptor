import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent {
  handleSubmit(e: Event): void {
    e.preventDefault()
    console.log("Envoyé")
  }
}
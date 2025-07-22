import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = "Phyo";
  productName = "Iphone"

  courseName = signal<string>("Angular");

  courseDuration = signal("15 videos");

  constructor() {
    this.firstName = "Thu";
    console.log(this.firstName);

    this.courseName.set("React")
  }
}

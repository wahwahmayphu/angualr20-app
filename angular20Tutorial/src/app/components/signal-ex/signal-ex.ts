import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = "Phyo";
  productName = "Iphone"

  // normal signal
  courseName = signal<string>("Angular");

  courseDuration = signal("15 videos");

   //computed signal
    courseDetails = computed(() => this.courseName() + " - " + this.courseDuration());

  constructor() {
    this.firstName = "Thu";
    console.log(this.firstName);
    setTimeout(() => {
        this.courseName.set("React");

  }, 5000);

  

    console.log(this.courseName())
     
  
  }

 
}

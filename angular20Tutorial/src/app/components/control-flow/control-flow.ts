import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  isParaVisible: boolean = true;

  startMonthName: string = "feb";

  cityList: string [] = ["Yangon", "Singapore", "Bankok", "Mawlamyine"]

  studentList: any [] = [
    {name:'PMT', city: 'Singapore', isActive: false},
    {name:'MP', city: 'Yangon', isActive: false},
    {name:'SS', city: 'Mawlamyine', isActive: true},
    {name:'SMN', city: 'Bankok', isActive: false}
  ]

  showP() {
    this.isParaVisible = true;

  }

  hideP() {
    this.isParaVisible = false;
  }

}

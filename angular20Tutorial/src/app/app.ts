import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlow } from './components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  // imports: [Admin,User, DataBinding],
 //imports: [SignalEx],
  imports:[ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}

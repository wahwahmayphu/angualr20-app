import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';

export const routes: Routes = [
   {
      path:'admin',
      component: Admin
   },

   {
      path: 'control-flow-statement',
      component: ControlFlow
   },
   {
      path: 'data-binding',
      component: DataBinding
   },
   {
      path:'signal',
      component: SignalEx
   },
   {
      path: 'Attribute-dir',
      component: AttDirective
   }
 
];

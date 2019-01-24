import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FormComponent} from './components/form/form.component';
import {ResultOfFormComponent} from './components/result-of-form/result-of-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'form', component: FormComponent },
  { path: 'result', component: ResultOfFormComponent  },
  { path: '', component: FormComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

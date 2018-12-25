import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInFormComponent } from './log-in-form/log-in-form.component';

const routes: Routes = [

  { path: '**',
    component: LogInFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

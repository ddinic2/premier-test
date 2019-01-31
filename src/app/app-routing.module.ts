import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StringDateComponent } from './string-date/string-date.component';
import { AutoSuggestionComponent } from './auto-suggestion/auto-suggestion.component';
import { GameNumbersComponent } from './game-numbers/game-numbers.component';

const routes: Routes = [

  { path: 'game-numbers',
  component: GameNumbersComponent,
  },
  { path: 'auto-suggestion',
  component: AutoSuggestionComponent,
  },
  { path: '**',
    component: StringDateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

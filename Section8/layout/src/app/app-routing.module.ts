import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvComponent } from './tv/tv.component';
import { ColaComponent } from './cola/cola.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CleanerComponent } from './cleaner/cleaner.component';

const routes: Routes = [
  { path: 'tv', component: TvComponent},
  { path: 'cola', component: ColaComponent},
  { path: 'coffee', component: CoffeeComponent},
  { path: 'cleaner', component: CleanerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

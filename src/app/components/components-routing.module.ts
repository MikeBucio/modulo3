import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeoriaDesicionComponent } from './teoria-desicion/teoria-desicion.component';
import { CadenasMarkovComponent } from './cadenas-markov/cadenas-markov.component';
import { TeoriaColasComponent } from './teoria-colas/teoria-colas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teoria-desicion', component: TeoriaDesicionComponent },
  { path: 'teoria-colas', component: TeoriaColasComponent },
  { path: 'cadenas-markov', component: CadenasMarkovComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}

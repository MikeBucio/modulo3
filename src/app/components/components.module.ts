//modulos
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//componentes
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TeoriaDesicionComponent } from './teoria-desicion/teoria-desicion.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { CadenasMarkovComponent } from './cadenas-markov/cadenas-markov.component';
import { TeoriaColasComponent } from './teoria-colas/teoria-colas.component';

const COMPONENTS = [
  HomeComponent,
  TeoriaDesicionComponent,
  CadenasMarkovComponent,
  TeoriaColasComponent,
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentsRoutingModule,
  ],
  declarations: [...COMPONENTS],
  exports: [ReactiveFormsModule, ...COMPONENTS],
})
export class ComponentsModule {}

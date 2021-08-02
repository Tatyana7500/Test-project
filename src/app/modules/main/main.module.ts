import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { MainComponent } from './main.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MainRoutingModule } from './main-routing.module';
import { ListOfResultsComponent } from './components/list-of-results/list-of-results.component';

@NgModule({
  declarations: [
    MainComponent,
    ListOfResultsComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScrollingModule,
    MainRoutingModule,
  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RepositoryComponent } from './repository.component';
import { RepositoryRoutingModule } from './repository-routing.module';

@NgModule({
  declarations: [
    RepositoryComponent,
  ],
  exports: [
    RepositoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScrollingModule,
    RepositoryRoutingModule,
  ]
})
export class RepositoryModule { }

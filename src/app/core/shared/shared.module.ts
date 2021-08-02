import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchComponent } from './components/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DropdownscrollComponent } from './components/dropdownscroll/dropdownscroll.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SearchComponent,
    SpinnerComponent,
    CheckboxComponent,
    DropdownscrollComponent,
  ],
  exports: [
    SearchComponent,
    SpinnerComponent,
    CheckboxComponent,
    DropdownscrollComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule {}

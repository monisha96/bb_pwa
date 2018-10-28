import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
  ],
  declarations: [
    FilterComponent,
  ],
  exports: [
    FilterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class FilterModule {
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MovielistComponent } from './movielist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    MovielistComponent,
  ],
  exports: [
    MovielistComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class MovielistModule {
}

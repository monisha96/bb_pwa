import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToppicksComponent } from './toppicks.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ToppicksComponent,
  ],
  exports: [
    ToppicksComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ToppicksModule {
}

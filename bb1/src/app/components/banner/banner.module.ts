import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    BannerComponent,
  ],
  exports: [
    BannerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class BannerModule {
}

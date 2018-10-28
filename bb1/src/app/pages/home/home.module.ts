import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '../../components/header/header.module';
import { BannerModule } from '../../components/banner/banner.module';
import {FilterModule} from '../../components/filter/filter.module';
import {MovielistModule} from '../../components/movielist/movielist.module';
import {ToppicksModule} from '../../components/toppicks/toppicks.module';
import {FooterModule} from '../../components/footer/footer.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    HeaderModule,
    BannerModule,
    FilterModule,
    MovielistModule,
    ToppicksModule,
    FooterModule
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

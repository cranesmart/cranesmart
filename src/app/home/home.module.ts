import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
// import { HeaderComponent } from '../header/header.component';
import { HeaderPartComponent } from '../allComponents/header-part/header-part.component';
import { MiddleNavigationComponent } from '../allComponents/middle-navigation/middle-navigation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderPartComponent, MiddleNavigationComponent]
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoasterDetailsPageRoutingModule } from './roaster-details-routing.module';

import { RoasterDetailsPage } from './roaster-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoasterDetailsPageRoutingModule
  ],
  declarations: [RoasterDetailsPage]
})
export class RoasterDetailsPageModule {}

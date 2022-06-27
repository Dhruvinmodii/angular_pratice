import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepiPageRoutingModule } from './recepi-routing.module';

import { RecepiPage } from './recepi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepiPageRoutingModule
  ],
  declarations: [RecepiPage]
})
export class RecepiPageModule {}

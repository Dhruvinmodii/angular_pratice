import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepiPage } from './recepi.page';

const routes: Routes = [
  {
    path: '',
    component: RecepiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepiPageRoutingModule {}

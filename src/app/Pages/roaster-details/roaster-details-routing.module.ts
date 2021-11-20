import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoasterDetailsPage } from './roaster-details.page';

const routes: Routes = [
  {
    path: '',
    component: RoasterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoasterDetailsPageRoutingModule {}

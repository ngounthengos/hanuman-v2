import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerComponent } from './beer.component';

const routes: Routes = [{path: '', component: BeerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }

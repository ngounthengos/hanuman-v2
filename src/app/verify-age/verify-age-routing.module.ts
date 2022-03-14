import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyAgeComponent } from './verify-age.component';

const routes: Routes = [{ path: '', component: VerifyAgeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyAgeRoutingModule { }

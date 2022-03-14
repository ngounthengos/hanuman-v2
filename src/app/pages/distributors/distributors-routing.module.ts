import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorsComponent } from './distributors.component';

const routes: Routes = [{ path: '', component: DistributorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorsRoutingModule { }

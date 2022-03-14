import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorsRoutingModule } from './distributors-routing.module';
import { DistributorsComponent } from './distributors.component';
import { SharedModule } from 'src/app/shared.module'


@NgModule({
  declarations: [
    DistributorsComponent
  ],
  imports: [
    CommonModule,
    DistributorsRoutingModule,
    SharedModule
  ]
})
export class DistributorsModule { }

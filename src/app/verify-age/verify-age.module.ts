import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VerifyAgeRoutingModule } from './verify-age-routing.module';
import { VerifyAgeComponent } from './verify-age.component';


@NgModule({
  declarations: [VerifyAgeComponent],
  imports: [
    CommonModule,
    VerifyAgeRoutingModule,
    FormsModule
  ]
})
export class VerifyAgeModule {}

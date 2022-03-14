import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';
import { BeerComponent } from './beer.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [BeerComponent],
  imports: [CommonModule, BeerRoutingModule, SharedModule],
})
export class BeerModule { }

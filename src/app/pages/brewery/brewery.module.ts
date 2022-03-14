import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreweryRoutingModule } from './brewery-routing.module';
import { BreweryComponent } from './brewery.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [BreweryComponent],
  imports: [CommonModule, BreweryRoutingModule, SharedModule],
})
export class BreweryModule { }

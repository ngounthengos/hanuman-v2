import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';

import { SharedModule } from 'src/app/shared.module'
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    StoryRoutingModule,
    SharedModule,
  ]
})
export class StoryModule { }

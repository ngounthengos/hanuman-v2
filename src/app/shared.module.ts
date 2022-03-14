import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from "ngx-spinner";
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AnimateOnScrollModule,
    FontAwesomeModule,
    NgxSpinnerModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AnimateOnScrollModule,
    FontAwesomeModule,
    NgxSpinnerModule,
  ]
})
export class SharedModule { }

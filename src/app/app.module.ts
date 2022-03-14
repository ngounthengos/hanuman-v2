import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';
// import third-party module
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
// component
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { TapToTopComponent } from './shared/components/tap-to-top/tap-to-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PositionComponent } from './posts/position/position.component';
import { CareerTagComponent } from './posts/career-tag/career-tag.component';
import { PageComponent } from './posts/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TapToTopComponent,
    PositionComponent,
    CareerTagComponent,
    PageComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,

    // import module here
    NgxSpinnerModule,
    AnimateOnScrollModule.forRoot(),
    ScrollToModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: env.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

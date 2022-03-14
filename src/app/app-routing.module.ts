import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgeVerficationGuard } from './age-verfication.guard';
import { PositionComponent } from './posts/position/position.component';
import { CareerTagComponent } from './posts/career-tag/career-tag.component';
import { PageComponent } from './posts/page/page.component';

// Order matter here
const routes: Routes = [
  // Pages
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'verify-age',
    loadChildren: () =>
      import('./verify-age/verify-age.module').then((m) => m.VerifyAgeModule),
  },
  {
    path: 'home',
    canActivate: [AgeVerficationGuard],
    component: HomeComponent,
  },
  {
    path: 'brewery',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./pages/brewery/brewery.module').then((m) => m.BreweryModule),
  },
  {
    path: 'story',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./pages/story/story.module').then((m) => m.StoryModule),
  },
  {
    path: 'products',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./pages/beer/beer.module').then((m) => m.BeerModule),
  },
  {
    path: 'media',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./pages/media/media.module').then((m) => m.MediaModule),
  },
  {
    path: 'contact',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'distributor',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./pages/distributors/distributors.module').then((m) => m.DistributorsModule),
  },

  // Posts
  {
    path: 'career',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./pages/career/career.module').then((m) => m.CareerModule),
  },
  {
    path: 'career/:category',
    canActivate: [AgeVerficationGuard],
    component: CareerTagComponent
  },
  {
    path: 'career/:category/:position',
    canActivate: [AgeVerficationGuard],
    component: PositionComponent,
  },
  {
    path: 'media/:category',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./posts/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'media/:category/:post',
    canActivate: [AgeVerficationGuard],
    loadChildren: () =>
      import('./posts/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'page/:page',
    canActivate: [AgeVerficationGuard],
    component: PageComponent
  },
  {
    path: 'qrcodepackaging',
    loadChildren: () => new Promise(() => { window.location.href = "https://www.facebook.com/hanumanbeverageskh/" })
  },

  {
    path: 'register',
    loadChildren: () => new Promise(() => { window.location.href = "https://register.hanumanbeverages.com" })
  },
  {
    path: '**',
    canActivate: [AgeVerficationGuard],
    redirectTo: '/home',
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

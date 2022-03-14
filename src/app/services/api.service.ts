import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) { }

  public backendUrl = 'https://cms.hanumanbeverages.com/storage/';

  public getHomes() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/home');
  }
  public getMenus() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/main-menu');
  }
  public getBrewery() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/brewery');
  }
  public getBeer() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/products');
  }
  public getStory() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/story');
  }
  public getMedia() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/media');
  }
  public getContact() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/contact');
  }
  public getPages() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/page');
  }
  public getCareer() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/career');
  }
  public getDistributor() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/distributor');
  }
  public getPosts() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/posts');
  }
  public getFooters() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/menu-footer');
  }
  public getBrand() {
    return this.http.get('https://cms.hanumanbeverages.com/api/v1/contact-footer');
  }
}
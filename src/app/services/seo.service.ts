import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta,
    private readonly api: ApiService,
    private titleService: Title,
  ) { }

  backendUrl: any;
  generageTags(title: any, description: any, image: any, url: any,) {
    this.backendUrl = this.api.backendUrl
    this.titleService.setTitle(title);
    // General
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ name: 'description', content: description });
    // Twiter Meta Tag
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@hanumanbeverages' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: description,
    });
    //  Facebook Meta Tag
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({
      property: 'og:description',
      content: description,
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: this.backendUrl + image });
  }
}
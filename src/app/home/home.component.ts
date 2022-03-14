import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SeoService } from '../services/seo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';

import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedLang = localStorage.getItem('lang') || 'en';
  backendUrl: any;
  mobile: any;
  content: any;
  s1Title: any;
  s1Subtitle: any;
  s1Description: any;
  s1Button: any;
  s2Title: any;
  s2Subtitle: any;
  s2Description: any;
  s2Button: any;
  s3Title: any;
  s3Subtitle: any;
  s3Description: any;
  s3Button: any;

  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleLeft = faChevronCircleLeft;

  constructor(
    private seo: SeoService,
    private readonly api: ApiService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer
  ) {
  }


  public ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.show()
    }, 3000);
    if (window.screen.width < 800) {
      // 768px portrait
      this.mobile = true;
    }
    this.backendUrl = this.api.backendUrl;
    localStorage.setItem('show', 'true');

    this.api.getHomes().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        //Sanitization
        this.content = response.khmer;
        this.s1Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1.title);
        this.s1Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1.sub_title);
        this.s1Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1.description);
        this.s1Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1.button);
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2.title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2.sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2.description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2.button);
        this.s3Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3.title);
        this.s3Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3.sub_title);
        this.s3Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3.description);
        this.s3Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3.button);
      } else {
        //Sanitization
        this.content = response.english;
        this.s1Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section1.title);
        this.s1Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section1.sub_title);
        this.s1Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section1.description);
        this.s1Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section1.button);
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section2.title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section2.sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section2.description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section2.button);
        this.s3Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section3.title);
        this.s3Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section3.sub_title);
        this.s3Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section3.description);
        this.s3Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section3.button);
      }
      this.seo.generageTags(
        response.seo[0].title,
        response.seo[0].description,
        response.seo[0].thumbnail,
        response.seo[0].url,
      );
    });
  }
  show() {
    this.spinner.hide();
  }
}
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SeoService } from 'src/app/services/seo.service';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.scss']
})
export class DistributorsComponent implements OnInit {

  selectedLang = localStorage.getItem('lang') || 'en';  //Footer Directive
  backendUrl: any;
  content: any;
  img: any;
  s2Title: any;
  s2Subtitle: any;
  s2Description: any;
  s2Button: any;
  mobile: any;


  constructor(
    private readonly api: ApiService,
    private seo: SeoService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer
  ) {
  }


  public ngOnInit(): void {
    if (window.screen.width < 800) {
      // 768px portrait
      this.mobile = true;
    }
    this.spinner.show();
    setTimeout(() => {
      this.show()
    }, 3000);
    this.backendUrl = this.api.backendUrl;
    localStorage.setItem('show', 'true');

    this.api.getDistributor().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.khmer;
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2.title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2.sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2.description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2.button);
      } else {
        this.content = response.english;
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section2.title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section2.sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section2.description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section2.button);
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

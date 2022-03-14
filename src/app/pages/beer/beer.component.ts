import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements OnInit {
  backendUrl: any;
  content: any;
  img: any;
  safeUrl: any;
  mobile: any;

  selectedLang = localStorage.getItem('lang') || 'en';
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
  s4Title: any;
  s4Subtitle: any;
  s4Description: any;
  s4Button: any;

  constructor(
    private readonly api: ApiService,
    private seo: SeoService,
    private spinner: NgxSpinnerService,
    public sanitizer: DomSanitizer
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

    this.api.getBeer().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.khmer
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          response.khmer.section1[0].video_url
        );
        this.s1Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1.title);
        this.s1Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1.sub_title);
        this.s1Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1.description);
        this.s1Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1.button);
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].button);
        this.s3Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3.title);
        this.s3Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3.sub_title);
        this.s3Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3.description);
        this.s3Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3.button);
        this.s4Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section4.title);
        this.s4Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section4.sub_title);
        this.s4Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section4.description);
        this.s4Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section4.button);
      } else {
        this.content = response.english;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          response.english.section1[0].video_url
        );
        this.s1Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section1.title);
        this.s1Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section1.sub_title);
        this.s1Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section1.description);
        this.s1Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section1.button);
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].button);
        this.s3Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section3.title);
        this.s3Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section3.sub_title);
        this.s3Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section3.description);
        this.s3Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section3.button);
        this.s4Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section4.title);
        this.s4Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section4.sub_title);
        this.s4Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section4.description);
        this.s4Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section4.button);
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

import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {

  selectedLang = localStorage.getItem('lang') || 'en';
  backendUrl: any;
  content: any;
  s1Title: any;
  s1Subtitle: any;
  s1Description: any;
  s1Button: any;
  s21Title: any;
  s21Subtitle: any;
  s21Description: any;
  s21Button: any;
  s22Title: any;
  s22Subtitle: any;
  s22Description: any;
  s22Button: any;
  s3Title: any;
  s3Subtitle: any;
  s3Description: any;
  s3Button: any;
  s4Title: any;
  s4Subtitle: any;
  s4Description: any;
  s4Button: any;
  s5Title: any;
  s5Subtitle: any;
  s5Description: any;
  s5Button: any;
  mobile: any

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
    this.api.getStory().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.khmer;
        this.s1Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1[0].title);
        this.s1Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1[0].sub_title);
        this.s1Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1[0].description);
        this.s1Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1[0].button);
        this.s21Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].title);
        this.s21Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].sub_title);
        this.s21Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].description);
        this.s21Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].button);
        this.s22Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[1].title);
        this.s22Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[1].sub_title);
        this.s22Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[1].description);
        this.s22Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[1].button);
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
        this.s1Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section1[0].title);
        this.s1Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section1[0].sub_title);
        this.s1Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section1[0].description);
        this.s1Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section1[0].button);
        this.s21Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].title);
        this.s21Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].sub_title);
        this.s21Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].description);
        this.s21Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].button);
        this.s22Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[1].title);
        this.s22Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[1].sub_title);
        this.s22Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[1].description);
        this.s22Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[1].button);
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

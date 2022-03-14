import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  selectedLang = localStorage.getItem('lang') || 'en';  //Footer Directive
  faRight = faChevronRight;
  faLeft = faChevronLeft;
  backendUrl: any;
  content: any;
  mobile: any;
  post: any;
  khmer: any;
  s2Title: any;
  s2Subtitle: any;
  s2Description: any;
  s2Button: any;
  s3Title: any;
  s3Subtitle: any;
  s3Description: any;
  s3Button: any;
  cta: any;
  eventFilter: any = { category_id: 1 }

  constructor(
    private readonly api: ApiService,
    private seo: SeoService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer
  ) {
  }

  public ngOnInit(): void {
    this.backendUrl = this.api.backendUrl;
    this.spinner.show();
    setTimeout(() => {
      this.show()
    }, 3000);
    if (window.screen.width < 1280) {
      // 768px portrait
      this.mobile = true;
    }
    this.api.getMedia().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.khmer;
        this.khmer = true;
        this.cta = "ស្វែងយល់បន្ថែម"
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].button);
        this.s3Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3[0].title);
        this.s3Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3[0].sub_title);
        this.s3Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3[0].description);
        this.s3Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section3[0].button);
      } else {
        this.content = response.english;
        this.khmer = false;
        this.cta = "Learn more"
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].button);
        this.s3Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section3[0].title);
        this.s3Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section3[0].sub_title);
        this.s3Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section3[0].description);
        this.s3Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section3[0].button);
      }
      this.seo.generageTags(
        response.seo[0].title,
        response.seo[0].description,
        response.seo[0].thumbnail,
        response.seo[0].url,
      );
    });
    this.api.getPosts().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.post = response.khmer[0];
      } else {
        this.post = response.english[0];
      }
    });
  }
  show() {
    this.spinner.hide();
  }
}

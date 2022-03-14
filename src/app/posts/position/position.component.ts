import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
})
export class PositionComponent implements OnInit {
  selectedLang = localStorage.getItem('lang') || 'en';
  backendUrl: any;
  paramQuery1 = '';
  paramQuery2 = '';
  content: any;
  article: any;
  faCaretRight = faCaretRight;
  contentTitle: any;
  contentSubtitle: any;
  contentDescription: any;

  constructor(
    private readonly api: ApiService,
    private seo: SeoService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.paramQuery1 = data.position;
      this.paramQuery2 = data.category;
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.show()
    }, 3000);
    this.backendUrl = this.api.backendUrl;
    this.api.getCareer().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.khmer;
        for (let i = 0; i < response.khmer[0].length; i++) {
          switch (response.khmer[0][i].title) {
            case this.paramQuery1:
              this.article = response.khmer[0][i];
              if (response.khmer[0][i].title == null) {
                this.contentTitle = null
              } else {
                this.contentTitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer[0][i].title)
              }
              if (response.khmer[0][i].sub_title == null) {
                this.contentSubtitle = null
              } else {
                this.contentSubtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer[0][i].sub_title)
              }
              if (response.khmer[0][i].body == null) {
                this.contentDescription = null
              } else {
                this.contentDescription = this.sanitizer.bypassSecurityTrustHtml(response.khmer[0][i].body)
              }
              break;
          }
        }
      } else {
        this.content = response.english[0];
        for (let i = 0; i < response.english[0].length; i++) {
          switch (response.english[0][i].title) {
            case this.paramQuery1:
              this.article = response.english[0][i];
              if (response.english[0][i].title == null) {
                this.contentTitle = null
              } else {
                this.contentTitle = this.sanitizer.bypassSecurityTrustHtml(response.english[0][i].title)
              }
              if (response.english[0][i].sub_title == null) {
                this.contentSubtitle = null
              } else {
                this.contentSubtitle = this.sanitizer.bypassSecurityTrustHtml(response.english[0][i].sub_title)
              }
              if (response.english[0][i].body == null) {
                this.contentDescription = null
              } else {
                this.contentDescription = this.sanitizer.bypassSecurityTrustHtml(response.english[0][i].body)
              }
              break;
          }
        }
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

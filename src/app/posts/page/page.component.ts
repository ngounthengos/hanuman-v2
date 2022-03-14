import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  backendUrl: any;
  content: any;
  selectedLang = localStorage.getItem('lang') || 'en';
  date: any;
  paramQuery = '';
  pet: any;
  article: any;
  category: any;
  faCaretRight = faCaretRight;
  title: any;
  description: any;
  url: any;
  contentTitle: any;
  contentSubtitle: any;
  contentDescription: any;

  constructor(
    private readonly api: ApiService,
    private seo: SeoService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.paramQuery = data.page;
    });
  }

  public ngOnInit(): void {
    this.backendUrl = this.api.backendUrl;
    localStorage.setItem('show', 'true');
    this.spinner.show();
    setTimeout(() => {
      this.show()
    }, 3000);
    this.api.getPages().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.english[0]
      } else {
        this.content = response.english[0];
        for (let i = 0; i < response.english[0].length; i++) {
          switch (response.english[0][i].slug) {
            case this.paramQuery:
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
  public ngAfterViewInit(): void { }
  show() {
    this.spinner.hide();
  }
}

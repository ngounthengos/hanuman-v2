import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {

  backendUrl: any;
  content: any;
  selectedLang = localStorage.getItem('lang') || 'en';
  paramQuery = '';
  pet: any;
  article: any;
  category: any;
  faCaretRight = faCaretRight;

  constructor(
    private readonly api: ApiService,
    private seo: SeoService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.paramQuery = data.category;
    });
  }

  public ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.show()
    }, 3000);
    this.backendUrl = this.api.backendUrl;
    localStorage.setItem('show', 'true');
    this.api.getPosts().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.khmer[0];
      } else {
        this.content = response.english[0];
      }
      // this.seo.generageTags(
      //   response.seo[0].title,
      //   response.seo[0].description,
      //   response.seo[0].thumbnail,
      //   response.seo[0].url,
      // );
    });
  }

  show() {
    this.spinner.hide();
  }
}

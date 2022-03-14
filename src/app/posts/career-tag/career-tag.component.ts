import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-career-tag',
  templateUrl: './career-tag.component.html',
  styleUrls: ['./career-tag.component.scss'],
})
export class CareerTagComponent implements OnInit {

  backendUrl: any;
  content: any;
  selectedLang = localStorage.getItem('lang') || 'en';
  date: any;
  paramQuery = '';
  pet: any;

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
    this.api.getCareer().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.khmer;
      } else {
        this.content = response.english;
        this.date = new Date(response.english.created_at);
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

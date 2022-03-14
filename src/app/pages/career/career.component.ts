import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {


  backendUrl: any;
  content: any;
  selectedLang = localStorage.getItem('lang') || 'en';
  date: any;
  cta: any;
  header: any = {
  };

  constructor(
    private readonly api: ApiService,
    private spinner: NgxSpinnerService,
    private seo: SeoService
  ) {
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
        this.content = response.khmer[0];
        this.cta = 'ព័ត៌មានលំអិត'
      } else {
        this.content = response.english[0];
        this.cta = 'More detail'
      }
      this.seo.generageTags(
        response.seo[0].title,
        response.seo[0].description,
        response.seo[0].thumbnail,
        response.seo[0].url,
      );
    });
  } show() {
    this.spinner.hide();
  }
}

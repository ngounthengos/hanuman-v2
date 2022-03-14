import { Component, OnInit } from '@angular/core';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hanuman Beer';
  lang: any;
  router!: string;
  mobile: any;

  constructor(private readonly api: ApiService) {
  }

  faSearch = faSearch;
  faBars = faBars;

  menuItems: any;
  headerItems: any;

  backendUrl: any;
  content: any;

  selectedLang = localStorage.getItem('lang') || 'en';
  show = localStorage.getItem('show') || 'false';

  public ngOnInit(): void {
    if (window.screen.width < 800) {
      // 768px portrait
      this.mobile = true;
    }
    this.selectedLang = localStorage.getItem('lang') || 'en';
    this.api.getMenus().subscribe((response: any) => {
      if (this.selectedLang == 'en') {
        this.menuItems = response.english;
      } else {
        this.menuItems = response.khmer;
      }
    });
  }
  onActivate(event: any) {
    window.scroll(0, 0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
}

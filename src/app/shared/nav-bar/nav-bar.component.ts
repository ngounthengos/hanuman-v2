import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  faSearch,
  faBars,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() menuList: any;
  backendUrl: any;
  currentLang!: string;
  otherLang!: string;
  windowScrolled: boolean | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private api: ApiService
  ) {}

  faSearch = faSearch;
  faBars = faBars;
  faEllipsisV = faEllipsisV;
  isCollapsed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 20
    ) {
      this.windowScrolled = false;
    }
  }

  public ngOnInit(): void {
    this.backendUrl = this.api.backendUrl;
    this.currentLang = localStorage.getItem('currentLang') || 'English';
    this.otherLang = localStorage.getItem('otherLang') || 'ខ្មែរ';
  }
  switchLang() {
    if (localStorage.getItem('lang') == 'km') {
      localStorage.setItem('lang', 'en');
      localStorage.setItem('currentLang', 'English');
      localStorage.setItem('otherLang', 'ខ្មែរ');
      window.location.reload();
    } else {
      localStorage.setItem('lang', 'km');
      localStorage.setItem('currentLang', 'ខ្មែរ');
      localStorage.setItem('otherLang', 'English');
      window.location.reload();
    }
  }
  search() {
    alert('Search something?');
  }
}

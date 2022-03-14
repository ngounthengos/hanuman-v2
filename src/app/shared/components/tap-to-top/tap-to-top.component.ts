import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tap-to-top',
  templateUrl: './tap-to-top.component.html',
  styleUrls: ['./tap-to-top.component.scss'],
})
export class TapToTopComponent implements OnInit {
  faAngleUp = faAngleUp;

  windowScrolled: boolean | undefined;
  constructor(@Inject(DOCUMENT) private document: Document) {}
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
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
  ngOnInit() {}
}

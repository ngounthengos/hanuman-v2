import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { SeoService } from '../services/seo.service';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-age',
  templateUrl: './verify-age.component.html',
  styleUrls: ['./verify-age.component.scss'],
})
export class VerifyAgeComponent implements OnInit {

  show = 'false';
  backendUrl: any;
  content: any;
  paramQuery = '';
  returnUrl: any;

  constructor(
    private seo: SeoService,
    public router: Router,
    private readonly api: ApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.returnUrl = params.returnUrl;
        console.log(this.returnUrl); // price
      }
      );

    localStorage.setItem('allowAge', 'false');
    if (localStorage.getItem('show') == 'true') {
      localStorage.setItem('show', 'false');
      window.location.reload();
    }
    this.backendUrl = this.api.backendUrl;
    this.api.getHomes().subscribe((response: any) => {
      this.seo.generageTags(
        response.seo[0].title,
        response.seo[0].description,
        response.seo[0].thumbnail,
        response.seo[0].url,
      );
    });
  }
  setAge(ageForm: NgForm) {
    let today = new Date();
    let dayOfToday = today.getDate();
    let monthOfToday = today.getMonth();
    let yearOfToday = today.getFullYear();
    let dayOfBirth = ageForm.value.birthDate;
    let monthOfBirth = ageForm.value.birthMonth;
    let yearOfBirth = ageForm.value.birthYear;

    // Condition 1
    if (yearOfToday - yearOfBirth < 18) {
      localStorage.setItem('allowAge', 'false');
      localStorage.setItem('show', 'false');
      alert('You are NOT allowed to drink alcohol yet!');

      // Condition 2
    } else if (
      yearOfToday - yearOfBirth == 18 &&
      monthOfToday - monthOfBirth < 0 &&
      dayOfToday - dayOfBirth < 0
    ) {
      alert('You are NOT allowed to drink alcohol yet!');
    } else if (yearOfToday - yearOfBirth > 100) {
      localStorage.setItem('allowAge', 'false');
      localStorage.setItem('show', 'false');
      alert('You are TOO old to drink alcohol!');
    } else {
      localStorage.setItem('allowAge', 'true');
      localStorage.setItem('show', 'true');

      // Return to the inquery page
      window.location.href = this.returnUrl
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  selectedLang = localStorage.getItem('lang') || 'en';
  backendUrl: any;
  today: number = Date.now();

  //Footer Directive
  footerItems: any;
  brandItems: any;
  address: string = 'Address';
  phone: string = 'Phone';
  email: string = 'Email';
  social: string = 'Follow us';
  mobile: any;
  mainMenu: any;
  supportMenu: any;
  copyRight: any;
  currentTime: any = new Date()
  currentYear: any;
  facebookLink: any;
  instagramLink: any;
  tiktokLink: any;
  linkedinLink: any;


  constructor(private api: ApiService,
    public sanitizer: DomSanitizer) { }
  public ngOnInit(): void {
    this.backendUrl = this.api.backendUrl;
    this.currentYear = this.currentTime.getFullYear();
    this.api.getFooters().subscribe((response: any) => {
      if (this.selectedLang == 'en') {
        this.footerItems = response.english;
        this.mainMenu = "Main Menu";
        this.supportMenu = "Support"
        this.copyRight = "@" + this.currentYear + " All Rights Reserved. Hanuman Beverages Co., Ltd."
      } else {
        this.footerItems = response.khmer;
        this.mainMenu = "មាតិការ";
        this.supportMenu = "ជំនួយ"
        this.copyRight = "@" + this.currentYear + " រក្សាសិទ្ធគ្រប់យ៉ាងដោយ Hanuman Beverages Co., Ltd."
      }
    });
    this.api.getBrand().subscribe((response: any) => {
      this.facebookLink = response.english.contact[0]?.facebook
      this.instagramLink = response.english.contact[0]?.instagram
      this.tiktokLink = response.english.contact[0]?.tiktok
      this.linkedinLink = response.english.contact[0]?.linkedin
      if (this.selectedLang == 'en') {
        this.brandItems = response.english;
      } else {
        this.brandItems = response.khmer;
        this.address = 'អាស័យដ្ឋាន';
        this.phone = 'ទូរស័ព្ទ';
        this.email = 'អ៊ីម៉ែល';
        this.social = 'តាមដានយើង';
      }
    });
  }
}

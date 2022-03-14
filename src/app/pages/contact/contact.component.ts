import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SeoService } from 'src/app/services/seo.service';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactService } from 'src/app/services/contact.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  selectedLang = localStorage.getItem('lang') || 'en';  //Footer Directive
  mobile: any

  name!: string;
  email!: string;
  message!: string;
  backendUrl: any;
  content: any;
  english!: boolean;
  isPhone: any;
  s1Title: any;
  s1Subtitle: any;
  s1Description: any;
  s1Button: any;
  s2Title: any;
  s2Subtitle: any;
  s2Description: any;
  s2Button: any;

  constructor(
    private readonly api: ApiService,
    private seo: SeoService,
    private spinner: NgxSpinnerService,
    private contactService: ContactService,
    private sanitizer: DomSanitizer
  ) {
  }
  public ngOnInit(): void {
    if (window.screen.width < 800) {
      // 768px portrait
      this.mobile = true;
    }
    this.backendUrl = this.api.backendUrl;
    this.spinner.show();
    this.api.getContact().subscribe((response: any) => {
      if (localStorage.getItem('lang') == 'km') {
        this.content = response.khmer;
        this.english = false;
        this.s1Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1[0].title);
        this.s1Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1[0].sub_title);
        this.s1Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1[0].description);
        this.s1Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section1[0].button);
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.khmer.section2[0].button);
      } else {
        this.content = response.english;
        this.english = true;
        this.s1Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section1[0].title);
        this.s1Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section1[0].sub_title);
        this.s1Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section1[0].description);
        this.s1Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section1[0].button);
        this.s2Title = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].title);
        this.s2Subtitle = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].sub_title);
        this.s2Description = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].description);
        this.s2Button = this.sanitizer.bypassSecurityTrustHtml(response.english.section2[0].button);
      }
      this.seo.generageTags(
        response.seo[0].title,
        response.seo[0].description,
        response.seo[0].thumbnail,
        response.seo[0].url,
      );
    });
  }
  isValid(p: any) {
    var isphone =
      /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(p);
    alert(isphone);
  }
  sendEmail(contactForm: NgForm) {
    // alert(contactForm.value.emailAddress + ' is sumited');
    const newFormData = {
      full_name: contactForm.value.fullName,
      email: contactForm.value.emailAddress,
      message: contactForm.value.textMessage,
      phone_number: contactForm.value.phoneNumber,
    };

    console.log(newFormData.full_name);
    console.log(newFormData.email);
    console.log(newFormData.message);
    console.log(newFormData.phone_number);
    alert('Thank you! We will contact you back soon.');
    this.contactService.sendEmail(newFormData).subscribe((data) => { });
  }
  show() {
    this.spinner.hide();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) { }

  selectedLang = localStorage.getItem('lang') || 'en';

  //Header

  sendEmail(clientInfo: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      'https://cms.hanumanbeverages.com/api/v1/send-mail',
      clientInfo,
      { headers: httpHeaders }
    );
  }
}

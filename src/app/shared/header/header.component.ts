import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerList: any;
  backendUrl: any;
  content: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.backendUrl = this.api.backendUrl;
  }
}

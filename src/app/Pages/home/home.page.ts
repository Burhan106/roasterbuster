import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { Roaster } from '../../models/roaster';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  roasterList: Roaster[] = [];

  constructor(private httpService: HttpService, public utils: UtilsService) {}

  ngOnInit() {
    this.getData();
  }

  refresh(ev) {
    this.getData();
    setTimeout(() => {
      ev.detail.complete();
    }, 2000);
  }

  getData() {
    this.httpService
      .makeHttpRequest('dummy-response.json')
      .subscribe((data) => {
        console.log('data', data);
        this.roasterList = data;

        data.forEach((element) => {
          this.roasterList;
        });
      });
  } 
}

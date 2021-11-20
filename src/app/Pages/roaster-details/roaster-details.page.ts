import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roaster } from 'src/app/models/roaster';
import * as moment from 'moment';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-roaster-details',
  templateUrl: './roaster-details.page.html',
  styleUrls: ['./roaster-details.page.scss'],
})
export class RoasterDetailsPage implements OnInit {
  roaster: Roaster = {
    'Aircraft Type': '748-800E',
    Captain: 'Richard Versluis',
    Date: '06/05/2020',
    Departure: 'AMS',
    Destination: 'ALC',
    DutyCode: 'FLIGHT',
    DutyID: 'FLT',
    'First Officer': 'Jeroen Derwort',
    'Flight Attendant': 'Lucy Stone',
    Flightnr: 'MX78',
    Tail: '9878',
    Time_Arrive: '14:15',
    Time_Depart: '11:35',
  };

  constructor(private route: ActivatedRoute, private router: Router, public utils: UtilsService) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.roaster = this.router.getCurrentNavigation().extras.state.roaster;
        console.log(this.roaster);
      }
    });
  }  

  ngOnInit() {}
}

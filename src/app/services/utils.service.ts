import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  parseDate(date) {
    if (date) {
      let d = date.split('/')[0];
      let m = date.split('/')[1];
      let y = date.split('/')[2];
      return moment(y + '-' + m + '-' + d).format('ddd. Do MMM. YYYY');
    }
  }
}

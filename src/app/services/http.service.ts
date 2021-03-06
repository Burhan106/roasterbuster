import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  roasterList = [
    {
      Flightnr: 'MX78',
      Date: '06/05/2020',
      'Aircraft Type': '748-800E',
      Tail: '9878',
      Departure: 'AMS',
      Destination: 'ALC',
      Time_Depart: '11:35',
      Time_Arrive: '14:15',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: 'Richard Versluis',
      'First Officer': 'Jeroen Derwort',
      'Flight Attendant': 'Lucy Stone',
    },
    {
      Flightnr: 'MX79',
      Date: '06/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '9878',
      Departure: 'ALC',
      Destination: 'AMS',
      Time_Depart: '15:05',
      Time_Arrive: '17:55',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: 'Richard Versluis',
      'First Officer': 'Jeroen Derwort',
      'Flight Attendant': 'Lucy Stone',
    },
    {
      Flightnr: 'MX71',
      Date: '07/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '9878',
      Departure: 'AMS',
      Destination: 'OSL',
      Time_Depart: '15:35',
      Time_Arrive: '17:20',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: 'Richard Versluis',
      'First Officer': 'Jeroen Derwort',
      'Flight Attendant': 'Lucy Stone',
    },
    {
      Flightnr: 'MX72',
      Date: '07/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '9878',
      Departure: 'AMS',
      Destination: 'ALC',
      Time_Depart: '18:05',
      Time_Arrive: '20:00',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: 'Richard Versluis',
      'First Officer': 'Karl Jenkins',
      'Flight Attendant': 'Lucy Stone',
    },
    {
      Flightnr: 'MM11',
      Date: '08/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '9878',
      Departure: 'AMS',
      Destination: 'ARN',
      Time_Depart: '16:00',
      Time_Arrive: '18:05',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX90',
      Date: '08/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '9878',
      Departure: 'ARN',
      Destination: 'AMS',
      Time_Depart: '18:50',
      Time_Arrive: '20:55',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX67',
      Date: '09/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '131',
      Departure: 'AMS',
      Destination: 'GVA',
      Time_Depart: '14:10',
      Time_Arrive: '15:40',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX61',
      Date: '09/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '131',
      Departure: 'VGA',
      Destination: 'AMS',
      Time_Depart: '16:30',
      Time_Arrive: '18:15',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX62',
      Date: '09/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '131',
      Departure: 'AMS',
      Destination: 'TXL',
      Time_Depart: '19:40',
      Time_Arrive: '20:55',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX63',
      Date: '10/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '131',
      Departure: 'TXL',
      Destination: 'AMS',
      Time_Depart: '17:20',
      Time_Arrive: '18:50',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'LX21',
      Date: '11/07/2020',
      'Aircraft Type': '748-800E',
      Tail: '131',
      Departure: 'AMS',
      Destination: 'MAD',
      Time_Depart: '15:50',
      Time_Arrive: '18:20',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'NX21',
      Date: '11/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'MAD',
      Destination: 'AMS',
      Time_Depart: '19:10',
      Time_Arrive: '21:45',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'L77',
      Date: '12/07/2020',
      'Aircraft Type': 'Airbus A380',
      Tail: '31B7',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '',
      Time_Arrive: '',
      DutyID: 'DO',
      DutyCode: 'OFF',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '13/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '',
      Time_Arrive: '',
      DutyID: 'DO',
      DutyCode: 'OFF',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '14/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '',
      Time_Arrive: '',
      DutyID: 'DO',
      DutyCode: 'OFF',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '454',
      Date: '15/07/2020',
      'Aircraft Type': 'Airbus A380',
      Tail: '31B7',
      Departure: 'AMS',
      Destination: 'MAD',
      Time_Depart: '19:45',
      Time_Arrive: '22:25',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX89',
      Date: '16/07/2020',
      'Aircraft Type': 'Airbus A330',
      Tail: 'V22',
      Departure: 'MAD',
      Destination: 'AMS',
      Time_Depart: '15:50',
      Time_Arrive: '18:35',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX89',
      Date: '16/07/2020',
      'Aircraft Type': 'Airbus A330',
      Tail: '77L',
      Departure: 'AMS',
      Destination: 'VIE',
      Time_Depart: '19:55',
      Time_Arrive: '21:40',
      DutyID: 'POS',
      DutyCode: 'POSITIONING',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX88',
      Date: '17/07/2020',
      'Aircraft Type': 'Airbus A330',
      Tail: '77L',
      Departure: 'VIE',
      Destination: 'AMS',
      Time_Depart: '11:15',
      Time_Arrive: '13:10',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: 'Richard Versluis',
      'First Officer': 'Jeroen Derwort',
      'Flight Attendant': 'Lucy Stone',
    },
    {
      Flightnr: '',
      Date: '17/07/2020',
      'Aircraft Type': 'Airbus A330',
      Tail: '77L',
      Departure: 'AMS',
      Destination: 'EDI',
      Time_Depart: '14:55',
      Time_Arrive: '16:20',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: 'Richard Versluis',
      'First Officer': 'Jeroen Derwort',
      'Flight Attendant': 'Lucy Stone',
    },
    {
      Flightnr: 'HA23',
      Date: '18/07/2020',
      'Aircraft Type': 'Airbus A330',
      Tail: '77L',
      Departure: 'EDI',
      Destination: 'AMS',
      Time_Depart: '05:50',
      Time_Arrive: '07:25',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '18/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'MAN',
      Time_Depart: '08:45',
      Time_Arrive: '10:05',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '18/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'MAN',
      Destination: 'AMS',
      Time_Depart: '10:50',
      Time_Arrive: '12:10',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '19/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'ATH',
      Time_Depart: '11:10',
      Time_Arrive: '14:20',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '19/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'ATH',
      Destination: 'AMS',
      Time_Depart: '15:05',
      Time_Arrive: '18:35',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '20/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '00:00:00',
      Time_Arrive: '23:59:59',
      DutyID: 'SBY',
      DutyCode: 'Standby',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '21/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '00:00:00',
      Time_Arrive: '23:59:59',
      DutyID: 'SBY',
      DutyCode: 'Standby',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '22/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '00:00:00',
      Time_Arrive: '23:59:59',
      DutyID: 'SBY',
      DutyCode: 'Standby',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '23/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'BLL',
      Time_Depart: '15:40',
      Time_Arrive: '16:45',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '23/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'BLL',
      Destination: 'AMS',
      Time_Depart: '17:35',
      Time_Arrive: '18:50',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '23/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'BUD',
      Time_Depart: '20:05',
      Time_Arrive: '22:05',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '24/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'BUD',
      Destination: 'AMS',
      Time_Depart: '11:50',
      Time_Arrive: '14:05',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '24/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'TXL',
      Time_Depart: '15:25',
      Time_Arrive: '16:35',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '25/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'TXL',
      Destination: 'AMS',
      Time_Depart: '13:35',
      Time_Arrive: '14:55',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '25/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'ZRH',
      Time_Depart: '16:10',
      Time_Arrive: '17:30',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '25/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '18:15',
      Time_Arrive: '19:55',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '26/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '',
      Time_Arrive: '',
      DutyID: 'DO',
      DutyCode: 'OFF',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '27/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'AMS',
      Destination: 'AMS',
      Time_Depart: '',
      Time_Arrive: '',
      DutyID: 'DO',
      DutyCode: 'OFF',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '28/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'RTM',
      Destination: 'RTM',
      Time_Depart: '',
      Time_Arrive: '',
      DutyID: 'DO',
      DutyCode: 'OFF',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX31',
      Date: '29/07/2020',
      'Aircraft Type': 'B737-400',
      Tail: 'L89',
      Departure: 'AMS',
      Destination: 'BUD',
      Time_Depart: '06:00',
      Time_Arrive: '08:00',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: '',
      Date: '29/07/2020',
      'Aircraft Type': '',
      Tail: '',
      Departure: 'BUD',
      Destination: 'BUD',
      Time_Depart: '08:00',
      Time_Arrive: '13:45',
      DutyID: 'OFD',
      DutyCode: 'LAYOVER',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
    {
      Flightnr: 'MX32',
      Date: '30/07/2020',
      'Aircraft Type': 'B737-400',
      Tail: 'L89',
      Departure: 'BUD',
      Destination: 'AMS',
      Time_Depart: '13:45',
      Time_Arrive: '17:30',
      DutyID: 'FLT',
      DutyCode: 'FLIGHT',
      Captain: '',
      'First Officer': '',
      'Flight Attendant': '',
    },
  ];

  constructor(private httpClient: HttpClient) {}

  makeHttpRequest(apiName): Observable<any> {
    /*  let headers = {};
    return this.httpClient.get(environment.url+'/'+apiName, { headers: headers }).pipe(
      map((data) => {
        return data;
      })
    ); */

    return new Observable((observer) => {
      observer.next(this.roasterList);
    });
  }
}

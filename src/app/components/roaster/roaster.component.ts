import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Roaster } from 'src/app/models/roaster';

@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss'],
})
export class RoasterComponent implements OnInit {

  @Input() roaster: Roaster;

  constructor(private router: Router) { }

  ngOnInit() {}
  

  openDetail() {
    let navigationExtras: NavigationExtras = {
      state: {
        roaster: this.roaster
      }
    };
    this.router.navigate(['roaster-details'], navigationExtras);
  }

}

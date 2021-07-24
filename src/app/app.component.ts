import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public list: NavigationModel[]
  countries = []
  zoneList = [];
  stateList = [];
  state = [];
  substate = [];
  upOrDown = false
  population:any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getJSON().subscribe(data => {
      this.countries = data;
      this.list = this.countries
     });
  }

  clickOnCountry(list) {
    this.upOrDown = !this.upOrDown;
    this.upOrDown ? this.zoneList = list[0].values :  this.zoneList = []
  }

  numDifferentiation(value) {
    this.population = Math.abs(value);
    if (this.population >= 10000000) {
      this.population = (this.population / 10000000).toFixed(2) + ' Cr';
    } else if (this.population >= 100000) {
      this.population = (this.population / 100000).toFixed(2) + ' Lac';
    }
    return this.population;
  }

  clickOnZone(name) {
    this.zoneList.forEach(element => {
      if (element.name == name) {
        element.show = !element.show;
      }
    });
  }
}

class NavigationModel {
  public name: string;
  public values: NavigationModel[];
}


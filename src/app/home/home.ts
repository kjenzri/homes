import { Component, inject, Inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location-info';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for(housingLocationInfo of housingLocationInfoList; track $index){
        <app-housing-location [housingLocationInfo]="housingLocationInfo" />
      }
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class Home {
  housingLocationInfoList: HousingLocationInfo[] = [];
  housingService = inject(Housing);
  constructor() {
    this.housingLocationInfoList = this.housingService.getAllHousingLocationInfos();
  }
}

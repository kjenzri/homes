import { ChangeDetectionStrategy, Component, inject, Inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location-info';
import { Housing } from '../housing';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for(housingLocationInfo of filtredHousingLocationInfoList; track $index){
        <app-housing-location [housingLocationInfo]="housingLocationInfo" />
      }
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class Home {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  housingLocationInfoList: HousingLocationInfo[] = [];
  filtredHousingLocationInfoList: HousingLocationInfo[] = [];

  housingService = inject(Housing);
 
  constructor() {
    this.housingService.getAllHousingLocationInfos()
    .then((housingLocationInfoList: HousingLocationInfo[]) => {
      this.housingLocationInfoList = housingLocationInfoList;
      this.filtredHousingLocationInfoList = this.housingLocationInfoList;
      this.changeDetectorRef.markForCheck();
    });    
  }

  filterResults(text: string) {
    if(!text){
      this.filtredHousingLocationInfoList = this.housingLocationInfoList;
      return;
    }
    this.filtredHousingLocationInfoList = this.housingLocationInfoList.filter((housingLocationInfo) => 
      housingLocationInfo?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}

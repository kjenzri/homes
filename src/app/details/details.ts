import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housing-location-info';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
     <article>
      <img
        class="listing-photo"
        [src]="housingLocationInfo?.photo"
        alt="Exterior photo of {{ housingLocationInfo?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocationInfo?.name }}</h2>
        <p class="listing-location">{{ housingLocationInfo?.city }}, {{ housingLocationInfo?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocationInfo?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocationInfo?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocationInfo?.laundry }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.css'],
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(Housing);
  housingLocationInfo: HousingLocationInfo | undefined;
  
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocationInfo = this.housingService.getHousingLocationInfoById(housingLocationId);
  }
}

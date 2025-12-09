import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location-info';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocationInfo().photo"
        alt="Exterior photo of {{ housingLocationInfo().name }}"
        crossorigin
        />
      <h2 class="listing-heading">{{ housingLocationInfo().name }}</h2>
      <p class="listing-location">{{ housingLocationInfo().city }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  housingLocationInfo = input.required<HousingLocationInfo>();

}

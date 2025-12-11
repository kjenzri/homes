import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location-info';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
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
      <a [routerLink]="['/details', housingLocationInfo().id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  housingLocationInfo = input.required<HousingLocationInfo>();

}

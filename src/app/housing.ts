import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location-info';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  readonly url = "http://localhost:3000/locations";
  
  async getAllHousingLocationInfos(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationInfoById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const location = await data.json();
    return location[0] ?? {};
  }

  submitApplication(firstName: string,
    lastName: string,
    email: string){
      console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}

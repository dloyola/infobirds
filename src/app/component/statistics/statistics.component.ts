import { Component } from '@angular/core';
import { EBird } from 'src/app/interface/ebird';
import { Region } from 'src/app/interface/region';
import { ApiEbirdsService } from 'src/app/service/api-ebirds.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  title: string;
  regionCode:string;
  regionName:string;
  birds: EBird[];
  birdCodes: string[];
  orders: string[];

  constructor(private apiService: ApiEbirdsService) { 
    this.apiService = apiService;
  }

  regionChangedHandler = ({ISO2, country}: Region)  => {
    this.regionCode = ISO2;
    this.regionName = country
    this.fetchBirdCodesByRegion(this.regionCode);
    this.title = `Estadisticas de ${this.regionName}`
   }

   fetchBirdCodesByRegion = (regionCode: string): void => {
    this.apiService
    .getBirdCodesByRegion(regionCode)
    .subscribe({
      next: response => this.birdCodes = response,
      complete: () => {
        this.filterBirdsByCodes();
        this.orders = this.toHighchartSeries(this.getOrders());
      }
    });
  }

  filterBirdsByCodes = (): void => {
    let birds: EBird[] = JSON.parse(window.localStorage.getItem('birds'));
    let filteredBirds: EBird[] = birds.filter(bird => {
      if (this.birdCodes.includes(bird.speciesCode) === true) {
        return bird;
      }
      return null;
    })
    this.birds =  filteredBirds;
  }

  getOrders = () => {
    const reducer = (orders, currentItem) => {
      const { order } = currentItem;
      const { [order]: count = 0} = orders;
      orders[order] = count + 1;
      return orders;
    }
    return this.birds.reduce(reducer, []);
  }

  toHighchartSeries = (data: any) => {
    let series: any = [];
    Object.keys(data).map((key) => {
      series.push({'name': key, 'y': data[key]})
    })
    return series;
  }
}

import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { EBird } from 'src/app/interface/ebird';
import { ApiEbirdsService } from 'src/app/service/api-ebirds.service';
import { RegionsComponent } from '../regions/regions.component';


@Component({
  selector: 'app-list-birds',
  templateUrl: './list-birds.component.html',
  styleUrls: ['./list-birds.component.css']
})
export class ListBirdsComponent {

  birdCodes: string[];
  birds: EBird[];
  button: string;
  dataSource: MatTableDataSource<EBird>;
  displayedColumns: string[] = ['comName', 'sciName', 'category'];
  regionCode: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiEbirdsService) { 
    this.apiService = apiService;
    this.getRegion();
  }

  fetchBirdCodesByRegion = (): void => {
    this.apiService
    .getBirdCodesByRegion(this.regionCode)
    .subscribe({
      next: response => this.birdCodes = response,
      complete: () => {
        this.filterBirdsByCodes();
        this.showBirds();
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

  getRegion = () => {
    const { regionsList } = new RegionsComponent()
    const { ISO2: regionCode, country: regionName } = regionsList.find(region => region.country.toLowerCase() === 'chile')
    this.regionCode = regionCode;
    this.button = `Buscar aves observadas en ${regionName}`;
  }

  showBirds = (): void => {
    this.dataSource = new MatTableDataSource(this.birds);
    this.dataSource.paginator = this.paginator;
  }
}

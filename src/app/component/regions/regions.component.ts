import { Component, EventEmitter, Output } from '@angular/core';
import { Region } from 'src/app/interface/region';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {

  regionsList: Region[];
  selectedRegion: Region;
  title: string;

  @Output() onValueChange: EventEmitter<Region> = new EventEmitter();

  constructor() {
    this.title = "Regiones";
    this.regionsList = [
      {'ISO2': 'CL', 'country': 'Chile'},
      {'ISO2': 'AR', 'country': 'Argentina'},
      {'ISO2': 'BO', 'country': 'Bolivia'},
      {'ISO2': 'PE', 'country': 'Peru'},
    ];
  }

  selectOption(regionCode: string) {
    this.selectedRegion = this.regionsList.find(region => region.ISO2 == regionCode)
    this.onValueChange.emit(this.selectedRegion);
  }
}

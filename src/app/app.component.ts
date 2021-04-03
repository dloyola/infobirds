import { Component, OnInit } from '@angular/core';
import { ApiEbirdsService } from './service/api-ebirds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'infoBirds';

  public titleTab1: string = "Aves Chilenas"
  public titleTab2: string = "Estadisticas"
  public titleTab3: string = "About"
  public titleTab4: string = "Contactanos"

  constructor(private apiService: ApiEbirdsService) { 
    this.apiService = apiService;
  }

  ngOnInit(): void {
    this.fetchBirds()
    setInterval(this.fetchBirds, 60000*60)
  }

  fetchBirds = (): void => {
    this.clearLocalStorage();
    let birds = window.localStorage.getItem("birds");
    if (birds === null) {
      this.apiService
      .getBirds()
      .subscribe({
        next: response => {
          let birds = response;
          window.localStorage.setItem("birds", JSON.stringify(birds));
          window.localStorage.setItem("birdsExpireTime", JSON.stringify(Date.now() + ( 60000*60*24)));
        },
      }); 
    }
  }

  clearLocalStorage = (): void => {
    let expireTime = Number(window.localStorage.getItem("birdsExpireTime"));
    if (expireTime < Date.now()){
      localStorage.removeItem('birds');
      localStorage.removeItem('birdsExpireTime');
    }
  }
}

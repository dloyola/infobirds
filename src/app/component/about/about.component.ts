import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public title: string = "Acerca del proyecto"
  public about: string = "Este proyecto esta enfocado en explorar las caracteristicas del framework Angular 11."

  constructor() { }

}

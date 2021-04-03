import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EBird } from '../interface/ebird';

@Injectable({
  providedIn: 'root'
})
export class ApiEbirdsService {

  private httpOptions = {
    headers: new HttpHeaders({
      "X-eBirdApiToken": null;
    })
  };

  constructor(private http: HttpClient) { 
    this.http = http;
  }

  getBirdCodesByRegion = (regionCode: string = 'CL'): Observable<[]> => {
    const url = `${environment.ebirdsBaseUrl}/product/spplist/${regionCode}`;
    return this.http.get<[]>(url, this.httpOptions);
  }

  getBirds = (): Observable<EBird[]> => {
    const url = `${environment.ebirdsBaseUrl}/ref/taxonomy/ebird?fmt=json`;
    return this.http.get<EBird[]>(url, this.httpOptions);
  }
}


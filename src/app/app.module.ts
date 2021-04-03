import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ChartModule } from 'angular-highcharts';

// services
import { ApiEbirdsService } from './service/api-ebirds.service'

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './component/about/about.component';
import { ListBirdsComponent } from './component/list-birds/list-birds.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { RegionsComponent } from './component/regions/regions.component';
import { PieChartComponent } from './component/pie-chart/pie-chart.component';
import { ContactComponent } from './component/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ListBirdsComponent,
    StatisticsComponent,
    RegionsComponent,
    PieChartComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient, HttpClientModule, ApiEbirdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

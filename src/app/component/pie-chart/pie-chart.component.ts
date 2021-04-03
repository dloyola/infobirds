import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() OrdersData: any = [];
  @Input() regionName: string;
  chart: Chart;

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.OrdersData?.currentValue != changes.OrdersData?.previousValue) {
      this.createChart(changes.OrdersData.currentValue);
    }
  }

  createChart = (data: any) => {
    this.chart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: `Ordenes de aves observadas en ${this.regionName}`
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y:.0f} ({point.percentage:.1f}%)</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        type: 'pie',
        data: data,
      }],
    });
  }


}

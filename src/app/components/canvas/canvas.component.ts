import { Feature } from 'src/app/interfaces/general-response.js';

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  @Input() data: Feature;

  dataPoints = [];

  chartOptions = {
    title: { text: "" },
    theme: 'dark2',
    width: 425,
    animationEnabled: true,
    data: [
      {
        type: 'pie',
        indexLabel: '{name} - {y}',
        // showInLegend: true,
        dataPoints: this.dataPoints
      }
    ]
  };;

  chart: any;

  constructor() { }

  ngOnInit(): void { }

  loadChart(): void {
    this.chart.title.set("text", this.data.attributes.NOMBRE_MPIO);
    this.dataPoints.push(
      { y: this.data.attributes.A_CASA, name: 'En casa' },
      { y: this.data.attributes.A_HOSPITAL, name: 'En hospitales (No UCI)' },
      { y: this.data.attributes.A_HOSPITAL_UCI, name: 'En UCI' }
    );
    this.chart.render();
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.loadChart();
  }
}

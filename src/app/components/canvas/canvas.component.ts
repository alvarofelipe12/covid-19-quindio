import { Feature } from 'src/app/interfaces/general-response.js';

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {

    @Input() data: Feature;

    constructor() { }

    ngOnInit(): void {
        console.log(this.data.attributes);
    }

    ngAfterViewInit(): void {
        this.loadChart();
    }

    loadChart(): void {
        const chart = new CanvasJS.Chart(this.data.attributes.NOMBRE_MPIO, {
            theme: 'dark2',
            width: 450,
            animationEnabled: true,
            title: { text: this.data.attributes.NOMBRE_MPIO },
            data: [
                {
                    type: 'pie',
                    indexLabel: '{name} - {y}',
                    showInLegend: true,
                    dataPoints: [
                        { y: this.data.attributes.A_CASA, name: 'En casa' },
                        { y: this.data.attributes.A_HOSPITAL, name: 'En hospitales (No UCI)' },
                        { y: this.data.attributes.A_HOSPITAL_UCI, name: 'En UCI' }
                    ]
                }
            ]
        });
        chart.render();
    }
}

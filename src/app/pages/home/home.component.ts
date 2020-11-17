import { Component, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/general-response';
import { ArcgisService } from '../../providers/arcgis.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    /**
     * Store the info per cities
     */
    infoPerCities: Feature[];

    constructor(private arcGis: ArcgisService) { }

    ngOnInit(): void {
        this.getInfo();
    }

    /**
     * Consume ws and load the general info
     * per city for Quindio's departament
     * @author Alvaro Felipe Garcia Mendez
     * @since 11/14/2020
     */
    getInfo(): void {
        this.arcGis.getGeneralInfo().subscribe(data => {
            this.infoPerCities = data.features;
        });
    }
}

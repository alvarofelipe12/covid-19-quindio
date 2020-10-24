import { Component, OnInit } from '@angular/core';

import { Feature } from './interfaces/general-response';
import { ArcgisService } from './providers/arcgis.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'covid19-quindio';

    infoPerCities: Feature[];

    constructor(
        private arcGis: ArcgisService
    ) { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.arcGis.getGeneralInfo()
            .subscribe(data => {
                // some
                this.infoPerCities = data.features;
            });
    }
}

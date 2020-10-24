import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralResponse } from '../interfaces/general-response';

@Injectable({
    providedIn: 'root'
})
export class ArcgisService {

    API_URL = 'https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/0/query';

    constructor(
        private http: HttpClient
    ) { }

    getGeneralInfo(): Observable<GeneralResponse> {
        const paramsForQuery = new HttpParams()
            .set('where', 'DPTO_CNMBR = \'QUINDÍO\'')
            .set('f', 'json')
            .set('outFields', '*')
            .set('outSR', '4326');
        return this.http.get<GeneralResponse>(this.API_URL, { params: paramsForQuery });
    }
}

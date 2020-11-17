import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'COVID 19 en el Quindío';

    constructor(
    ) { }

    ngOnInit(): void {
    }
}

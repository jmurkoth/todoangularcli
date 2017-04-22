import { Component, OnInit } from '@angular/core';
import { AppLogger } from '../common/common.logger';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(public applogger: AppLogger) {
    }

    ngOnInit(): void {
        this.applogger.info('Hello');
     }
}

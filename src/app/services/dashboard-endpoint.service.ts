import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfigurationService } from './configuration.service';



@Injectable()
export class DashboardEndpoint {
    private readonly _dashboardUrl: string = "/Dashboard";
    private readonly _calendarEventDetailUrl: string = "/Dashboard/calendar";

    get dashboardUrl() { return this.configurations.baseUrl + this._dashboardUrl; }
    get calendarEventDetailUrl() { return this.configurations.baseUrl + this._calendarEventDetailUrl; }

    constructor(private http: HttpClient, private configurations: ConfigurationService, private injector: Injector) {

    }
    getDashboardEndpoint<T>(): Observable<T> {
        let endpointUrl = this.dashboardUrl;

        return this.http.get<T>(endpointUrl);
    }
    getCalendarEventDetailEndpoint<T>(id?: number): Observable<T> {
     
        let endpointUrl = this.calendarEventDetailUrl + "/" + id;

        return this.http.get<T>(endpointUrl);
    }



}








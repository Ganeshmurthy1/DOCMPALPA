import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { DashboardEndpoint } from './dashboard-endpoint.service';
import { DashboardViewModel } from '../models/dashboardviewmodel.model';
import { CalendarEvent } from '../models/calendarevent.model';

@Injectable()
export class DashboardService {


    constructor(private router: Router, private http: HttpClient,
        private dashboardEndpoint: DashboardEndpoint) {

    }

    getDashboardItems() {

        return this.dashboardEndpoint.getDashboardEndpoint<DashboardViewModel>();
    }

    getcalendarEventDetail(id?: number) {
        return this.dashboardEndpoint.getCalendarEventDetailEndpoint<CalendarEvent>(id);
    }

}
















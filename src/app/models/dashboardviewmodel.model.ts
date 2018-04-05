
import { CalendarEvent } from './calendarevent.model';
import { TradePreclearanceRequest } from './tradepreclearancerequest.model';
import { ItemOfInterest } from './itemofinterest.model';
import { FlaggedItem } from './flaggeditem.model';

export class DashboardViewModel {

    public calendarEventViewModel: CalendarEvent[] = [];
    public tradePreclearanceRequestViewModel: TradePreclearanceRequest[] = [];
    public itemofInterestViewModel: ItemOfInterest[] = [];
    public flaggedItem: FlaggedItem[] = [];

}
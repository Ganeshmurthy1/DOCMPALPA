
import { AuditableEntity } from './auditableentity.model';


export class TradePreclearanceRequest extends AuditableEntity {


    constructor(id?: number, quantity?: number, daysToViolation?: number, tradeDate?: Date, description?: string, status?: string) {
        super();
        this.id = id;
        this.quantity = quantity;
        this.daysToViolation = daysToViolation;
        this.tradeDate = tradeDate;
        this.description = description;
        this.status = status;

    }

    public id: number;
    public quantity: number;
    public daysToViolation: number;
    public tradeDate: Date;
    public description: string;
    public status: string;






}
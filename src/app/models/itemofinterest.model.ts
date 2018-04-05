export class ItemOfInterest {


    constructor(id?: number, tradePreclearanceRequestId?: number, ioiType?: string, description?: string, status?: string) {

        this.id = id;
        this.tradePreclearanceRequestId = tradePreclearanceRequestId;
        this.ioiType = ioiType;
        this.description = description;
        this.status = status;
    }

    public id: number;

    public tradePreclearanceRequestId: number;
    public ioiType: string;
    public description: string;
    public status: string;

}














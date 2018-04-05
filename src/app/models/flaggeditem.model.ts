
export class FlaggedItem {

    constructor(id?: number, description?: string, status?: string, createdBy?: string) {

        this.id = id;
        this.description = description;
        this.status = status;
        this.createdBy = createdBy;
    }

    public id: number;
    public description: string;
    public status: string;
    public createdBy: string;



}
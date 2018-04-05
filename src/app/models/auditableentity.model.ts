
export class AuditableEntity {
    public createdBy: string;
    public createdDate?: Date;
    public updatedBy: string;
    public updatedDate?: Date;
    constructor() {

        this.createdBy = '';
        this.createdDate = null;
        this.updatedBy = '';
        this.updatedDate = null;
    }
}
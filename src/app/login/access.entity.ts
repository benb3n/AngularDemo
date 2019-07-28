export class Access {
    userID: number;
    organisationID: string;
    access: string;

    constructor() {
    }

    deserialized(res: any) {
        this.userID = res.userID;
        this.organisationID = res.organisationID;
        this.access = res.access;
        return this;
    }
}

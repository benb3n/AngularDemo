import { Access } from './access.entity';

export class User {
    BirthDate: string;
    Email: string;
    FirstName: string;
    Gender: string;
    Interests: string;
    LastName: string;
    Nationality: string;
    UserId: number;
    access: Access[];

    constructor() {
    }

    deserialized(res: any) {
        this.BirthDate = res.BirthDate;
        this.Email = res.Email;
        this.FirstName = res.FirstName;
        this.Gender = res.Gender;
        this.Interests = res.Interests;
        this.LastName = res.LastName;
        this.Nationality = res.Nationality;
        this.UserId = res.UserId;
        const accesses = [];
        for (const access of res.Access) {
            accesses.push(new Access().deserialized(access));
        }
        this.access = accesses;
        return this;
    }
}

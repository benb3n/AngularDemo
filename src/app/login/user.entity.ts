export class User {
    accountType: string;
    emailAddress: string;
    firstName: string;
    lastName: string;

    constructor(accountType: string, emailAddress: string, firstName: string, lastName: string) {
        this.accountType = accountType;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

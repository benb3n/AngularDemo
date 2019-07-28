export class EventRegistration {
    userId: string;
    eventId: string;
    status: string;

    constructor() {
    }
    deserialized(eventRegistration: any) {
        this.userId = eventRegistration.userId;
        this.eventId = eventRegistration.eventId;
        this.status = eventRegistration.status;
    }
}
export class Event {
    id: string;
    name: string;
    description: string;
    maxPax: Int16Array;
    date: Date;
    details: string;
    feedback: string[];

    constructor() {
    }

    deserialized(event: any) {
        this.id = event.id;
        this.name = event.name;
        this.description = event.description;
        this.maxPax = event.maxPax;
        this.details = event.details;
        this.date = new Date(event.date);
        this.feedback = event.feedback;
    }

    serialized() {
        //anything problem with serializing
    }

    setEventName(name: string){
        this.name = name;
    }

    setEventDescription(description: string){
        this.description = description;
    }

    setEventMaxPax(maxpax: Int16Array){
        this.maxPax = maxpax;
    }

    setEventDate(date: Date){
        this.date = date;
    }

    setEventDetails(details: string){
        this.details = details;
    }

    getEventId() {
        return this.id;
    }

    getEventName(){
        return this.name;
    }

    getEventDescription(){
        return this.description;
    }

    getEventDate(){
        return this.date;
    }

    getEventDetails(){
        return this.details;
    }

    getEventFeedback(){
        return this.feedback;
    }
}

export function Endpoints(
    reportBaseURL, eventBaseURL
){
    return {
        getAllEvents: reportBaseURL + '/getEvents',
        // getAllEvents: reportBaseURL + '/getEventsForPeriod',
        getUserEvent: reportBaseURL + '/getUserEvents',
        getEventParticipant: reportBaseURL + '/getEventUsers',
        getOrgEvent: reportBaseURL + '/getOrgEvents',
        getEventFeedback: reportBaseURL + '/getEventFeedback',

        getEvents: eventBaseURL + '/getEvents',
        getEventsBySearch: eventBaseURL + '/getEvents/search',
        getEventRegistrations: eventBaseURL + '/getEventRegistrations',
        registerEvent: eventBaseURL + '/register',
        withdrawEvent: eventBaseURL + '/withdraw'
    }
}
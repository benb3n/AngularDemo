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

        getEvents: eventBaseURL + '/event/view/',
        getOneEvents: eventBaseURL + '/event/view/',
        getEventsBySearch: eventBaseURL + '/event/getEvents/search',
        getEventRegistrations: eventBaseURL + '/event/getEventRegistrations',
        registerEvent: eventBaseURL + '/event/register',
        withdrawEvent: eventBaseURL + '/event/withdraw'
    }
}
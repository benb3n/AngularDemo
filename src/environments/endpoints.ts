export function Endpoints(
    reportBaseURL
){
    return {
        getAllEvents: reportBaseURL + '/getEvents',
        // getAllEvents: reportBaseURL + '/getEventsForPeriod',
        getUserEvent: reportBaseURL + '/getUserEvents',
        getEventParticipant: reportBaseURL + '/getEventUsers',
        getOrgEvent: reportBaseURL + '/getOrgEvents',
        getEventFeedback: reportBaseURL + '/getEventFeedback'
    }
}
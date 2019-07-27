export function Endpoints(
    reportBaseURL
){
    return {
        getAllEvents: reportBaseURL + '/getEvent',
        getUserEvent: reportBaseURL + '/getUserEvents'
    }
}
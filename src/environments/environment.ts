// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {Endpoints} from './endpoints';

export const reportBaseURL = "http://192.168.8.192:5000";
// export const eventBaseURL = "http://192.168.8.197:5000";
export const eventBaseURL = "http://192.168.8.191:1001";
export const environment = {
  production: false,
  endpoints : Endpoints(
    reportBaseURL,
    eventBaseURL
  )
};






/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

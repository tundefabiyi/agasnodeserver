import * as request from 'request'
import * as rp from 'request-promise'
import appmodel = require('../agas.model');


export class AGASAlertRequest {
    processRequest(requestid: string, param: any) {
        var responseurl = `${appmodel.firebasebaseurl}AGASAlertResponse.json`;
        param.firebaseresponsepath = responseurl;
        return this.createAGASAlertRequest(requestid, param);
    }
    createAGASAlertRequest(requestid: string, param: any) {

        var options = {
            method: 'POST',
            uri: `${appmodel.agasbaseurl}createdalertrequest`,
            body: {
                requestid: requestid,
                parameter: JSON.stringify(param)
            },
            json: true // Automatically stringifies the body to JSON
        };

        return rp(options)
            .then(function (repos) {


            })
            .catch(function (err) {
                // API call failed... 
            });


    }
}

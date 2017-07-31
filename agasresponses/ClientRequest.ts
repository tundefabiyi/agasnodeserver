import * as request from 'request'
import * as rp from 'request-promise'
import appmodel = require('../agas.model');


export class ClientRequest {
    processRequest(serverResponder: string, param: any) {
       
        return this.createAGASAlertRequest(serverResponder, param);
    }
    createAGASAlertRequest(serverResponder: string, param: any) {

        var options = {
            method: 'POST',
            uri: `${appmodel.agasbaseurl}createmobilerequest`,
            body: {
                serverResponder: serverResponder,
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

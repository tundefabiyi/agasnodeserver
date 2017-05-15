import * as request from 'request'
import * as rp from 'request-promise'
import appmodel = require('../agas.model');


  export  class GPFSNoteQuery {
        getResponse(param: any) {            

            return this.getGPFSNote(param.code,param.segmenttype,param.notetype,param.financialyearid);
        }
        getGPFSNote(code:string,segmenttype:number,notetype:number, financialyearid: number) {

            var options = {
                uri: `${appmodel.agasbaseurl}getGPFSNote`,
                qs: {

                    financialyearid: financialyearid,
                    notetype: notetype,
                    code:code,
                    segmenttype:segmenttype
                },
                headers: {
                    'User-Agent': 'Request-Promise'
                },
                json: true // Automatically parses the JSON string in the response 
            };

            return rp(options)
                .then(function (repos) {

                    return repos;
                })
                .catch(function (err) {
                    // API call failed... 
                });


        }
    }

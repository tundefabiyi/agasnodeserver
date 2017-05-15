import * as request from 'request'
import * as rp from 'request-promise'
import appmodel = require('../agas.model');



  export  class StatementOfChangesInNetAssets {
        getResponse(param: any) {
            var financialperiodid = param.financialyearid;

            return this.getStatementOfChangesInNetAssets(financialperiodid);
        }
        getStatementOfChangesInNetAssets(finyearid: number) {

            var options = {
                uri: `${appmodel.agasbaseurl}getStatementOfChangesInNetAssets`,
                qs: {

                    financialyearid: finyearid
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

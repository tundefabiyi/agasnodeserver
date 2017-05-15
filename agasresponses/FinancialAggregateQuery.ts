import * as request from 'request'
import * as rp from 'request-promise'
import appmodel = require('../agas.model');



    export class FinancialAggregateQuery {
        getResponse(param: any) {
            var financialperiodid = param.financialyearid;
            var accounttypeid = param.accounttypeid;
            return this.getFinAggItemList(accounttypeid, financialperiodid);
        }
        getFinAggItemList(accounttype: number, finyearid: number) {

            var options = {
                uri: `${appmodel.agasbaseurl}getFinAggInfoList`,
                qs: {
                    accounttypeid: accounttype, // -> uri + '?access_token=xxxxx%20xxxxx' 
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

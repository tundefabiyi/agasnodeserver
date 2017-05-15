import * as sql from 'mssql';
import * as request from 'request'
import * as rp from 'request-promise'
import appmodel = require('./agas.model');


export class agas {

    getfinancialperiodlist() {
        var options = {
            uri: `${appmodel.agasbaseurl}getFinancialPeriodList`,
            qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
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
    getAccountTypeList() {
        var options = {
            uri: `${appmodel.agasbaseurl}getAccountTypeList`,
            qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
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
    getGPFSNoteTypeList() {
        var options = {
            uri: `${appmodel.agasbaseurl}getGPFSNoteTypeList`,
            qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
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
    getCOASegmentTypeList() {
        var options = {
            uri: `${appmodel.agasbaseurl}getCOASegmentTypeList`,
            qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
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
        getdto_alertprocessorinfoList() {
        var options = {
            uri: `${appmodel.agasbaseurl}getdto_alertprocessorinfoList`,
            qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
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
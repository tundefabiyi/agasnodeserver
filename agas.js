"use strict";
var rp = require('request-promise');
var appmodel = require('./agas.model');
var agas = (function () {
    function agas() {
    }
    agas.prototype.getfinancialperiodlist = function () {
        var options = {
            uri: appmodel.agasbaseurl + "getFinancialPeriodList",
            qs: {
                access_token: 'xxxxx xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        return rp(options)
            .then(function (repos) {
            return repos;
        })
            .catch(function (err) {
        });
    };
    agas.prototype.getAccountTypeList = function () {
        var options = {
            uri: appmodel.agasbaseurl + "getAccountTypeList",
            qs: {
                access_token: 'xxxxx xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        return rp(options)
            .then(function (repos) {
            return repos;
        })
            .catch(function (err) {
        });
    };
    agas.prototype.getGPFSNoteTypeList = function () {
        var options = {
            uri: appmodel.agasbaseurl + "getGPFSNoteTypeList",
            qs: {
                access_token: 'xxxxx xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        return rp(options)
            .then(function (repos) {
            return repos;
        })
            .catch(function (err) {
        });
    };
    agas.prototype.getCOASegmentTypeList = function () {
        var options = {
            uri: appmodel.agasbaseurl + "getCOASegmentTypeList",
            qs: {
                access_token: 'xxxxx xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        return rp(options)
            .then(function (repos) {
            return repos;
        })
            .catch(function (err) {
        });
    };
    agas.prototype.getdto_alertprocessorinfoList = function () {
        var options = {
            uri: appmodel.agasbaseurl + "getdto_alertprocessorinfoList",
            qs: {
                access_token: 'xxxxx xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        return rp(options)
            .then(function (repos) {
            return repos;
        })
            .catch(function (err) {
        });
    };
    return agas;
}());
exports.agas = agas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFnYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQVksRUFBRSxXQUFNLGlCQUNwQixDQUFDLENBRG9DO0FBQ3JDLElBQU8sUUFBUSxXQUFXLGNBQWMsQ0FBQyxDQUFDO0FBRzFDO0lBQUE7SUEyR0EsQ0FBQztJQXpHRyxxQ0FBc0IsR0FBdEI7UUFDSSxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBSyxRQUFRLENBQUMsV0FBVywyQkFBd0I7WUFDcEQsRUFBRSxFQUFFO2dCQUNBLFlBQVksRUFBRSxhQUFhO2FBQzlCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVksRUFBRSxpQkFBaUI7YUFDbEM7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNiLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFFakIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxHQUFHO1FBRXBCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGlDQUFrQixHQUFsQjtRQUNJLElBQUksT0FBTyxHQUFHO1lBQ1YsR0FBRyxFQUFLLFFBQVEsQ0FBQyxXQUFXLHVCQUFvQjtZQUNoRCxFQUFFLEVBQUU7Z0JBQ0EsWUFBWSxFQUFFLGFBQWE7YUFDOUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWSxFQUFFLGlCQUFpQjthQUNsQztZQUNELElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUNGLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ2IsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUVqQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEdBQUc7UUFFcEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsa0NBQW1CLEdBQW5CO1FBQ0ksSUFBSSxPQUFPLEdBQUc7WUFDVixHQUFHLEVBQUssUUFBUSxDQUFDLFdBQVcsd0JBQXFCO1lBQ2pELEVBQUUsRUFBRTtnQkFDQSxZQUFZLEVBQUUsYUFBYTthQUM5QjtZQUNELE9BQU8sRUFBRTtnQkFDTCxZQUFZLEVBQUUsaUJBQWlCO2FBQ2xDO1lBQ0QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO1FBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDYixJQUFJLENBQUMsVUFBVSxLQUFLO1lBRWpCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQVUsR0FBRztRQUVwQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxvQ0FBcUIsR0FBckI7UUFDSSxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBSyxRQUFRLENBQUMsV0FBVywwQkFBdUI7WUFDbkQsRUFBRSxFQUFFO2dCQUNBLFlBQVksRUFBRSxhQUFhO2FBQzlCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVksRUFBRSxpQkFBaUI7YUFDbEM7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNiLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFFakIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxHQUFHO1FBRXBCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNHLDRDQUE2QixHQUE3QjtRQUNBLElBQUksT0FBTyxHQUFHO1lBQ1YsR0FBRyxFQUFLLFFBQVEsQ0FBQyxXQUFXLGtDQUErQjtZQUMzRCxFQUFFLEVBQUU7Z0JBQ0EsWUFBWSxFQUFFLGFBQWE7YUFDOUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWSxFQUFFLGlCQUFpQjthQUNsQztZQUNELElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUVGLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ2IsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUVqQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEdBQUc7UUFFcEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUwsV0FBQztBQUFELENBQUMsQUEzR0QsSUEyR0M7QUEzR1ksWUFBSSxPQTJHaEIsQ0FBQSJ9
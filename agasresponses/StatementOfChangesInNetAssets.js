"use strict";
var rp = require('request-promise');
var appmodel = require('../agas.model');
var StatementOfChangesInNetAssets = (function () {
    function StatementOfChangesInNetAssets() {
    }
    StatementOfChangesInNetAssets.prototype.getResponse = function (param) {
        var financialperiodid = param.financialyearid;
        return this.getStatementOfChangesInNetAssets(financialperiodid);
    };
    StatementOfChangesInNetAssets.prototype.getStatementOfChangesInNetAssets = function (finyearid) {
        var options = {
            uri: appmodel.agasbaseurl + "getStatementOfChangesInNetAssets",
            qs: {
                financialyearid: finyearid
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
    return StatementOfChangesInNetAssets;
}());
exports.StatementOfChangesInNetAssets = StatementOfChangesInNetAssets;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGVtZW50T2ZDaGFuZ2VzSW5OZXRBc3NldHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0ZW1lbnRPZkNoYW5nZXNJbk5ldEFzc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBWSxFQUFFLFdBQU0saUJBQ3BCLENBQUMsQ0FEb0M7QUFDckMsSUFBTyxRQUFRLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFJekM7SUFBQTtJQStCRSxDQUFDO0lBOUJHLG1EQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ2xCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUU5QyxNQUFNLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELHdFQUFnQyxHQUFoQyxVQUFpQyxTQUFpQjtRQUU5QyxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBSyxRQUFRLENBQUMsV0FBVyxxQ0FBa0M7WUFDOUQsRUFBRSxFQUFFO2dCQUVBLGVBQWUsRUFBRSxTQUFTO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVksRUFBRSxpQkFBaUI7YUFDbEM7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNiLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFFakIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxHQUFHO1FBRXBCLENBQUMsQ0FBQyxDQUFDO0lBR1gsQ0FBQztJQUNMLG9DQUFDO0FBQUQsQ0FBQyxBQS9CSCxJQStCRztBQS9CVyxxQ0FBNkIsZ0NBK0J4QyxDQUFBIn0=
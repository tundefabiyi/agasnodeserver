"use strict";
var rp = require('request-promise');
var appmodel = require('../agas.model');
var FinancialPerformance = (function () {
    function FinancialPerformance() {
    }
    FinancialPerformance.prototype.getResponse = function (param) {
        var financialperiodid = param.financialyearid;
        return this.getFinancialPerformance(financialperiodid);
    };
    FinancialPerformance.prototype.getFinancialPerformance = function (finyearid) {
        var options = {
            uri: appmodel.agasbaseurl + "getFinancialPerformance",
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
    return FinancialPerformance;
}());
exports.FinancialPerformance = FinancialPerformance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluYW5jaWFsUGVyZm9ybWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaW5hbmNpYWxQZXJmb3JtYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBWSxFQUFFLFdBQU0saUJBQ3BCLENBQUMsQ0FEb0M7QUFDckMsSUFBTyxRQUFRLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFFdkM7SUFBQTtJQStCQSxDQUFDO0lBOUJHLDBDQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ2xCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUU5QyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELHNEQUF1QixHQUF2QixVQUF3QixTQUFpQjtRQUVyQyxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBSyxRQUFRLENBQUMsV0FBVyw0QkFBeUI7WUFDckQsRUFBRSxFQUFFO2dCQUVBLGVBQWUsRUFBRSxTQUFTO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVksRUFBRSxpQkFBaUI7YUFDbEM7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNiLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFFakIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxHQUFHO1FBRXBCLENBQUMsQ0FBQyxDQUFDO0lBR1gsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSw0QkFBb0IsdUJBK0JoQyxDQUFBIn0=
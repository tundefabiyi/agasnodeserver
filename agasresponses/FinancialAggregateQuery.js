"use strict";
var rp = require('request-promise');
var appmodel = require('../agas.model');
var FinancialAggregateQuery = (function () {
    function FinancialAggregateQuery() {
    }
    FinancialAggregateQuery.prototype.getResponse = function (param) {
        var financialperiodid = param.financialyearid;
        var accounttypeid = param.accounttypeid;
        return this.getFinAggItemList(accounttypeid, financialperiodid);
    };
    FinancialAggregateQuery.prototype.getFinAggItemList = function (accounttype, finyearid) {
        var options = {
            uri: appmodel.agasbaseurl + "getFinAggInfoList",
            qs: {
                accounttypeid: accounttype,
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
    return FinancialAggregateQuery;
}());
exports.FinancialAggregateQuery = FinancialAggregateQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluYW5jaWFsQWdncmVnYXRlUXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaW5hbmNpYWxBZ2dyZWdhdGVRdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBWSxFQUFFLFdBQU0saUJBQ3BCLENBQUMsQ0FEb0M7QUFDckMsSUFBTyxRQUFRLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFJdkM7SUFBQTtJQWlDQSxDQUFDO0lBaENHLDZDQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ2xCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM5QyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELG1EQUFpQixHQUFqQixVQUFrQixXQUFtQixFQUFFLFNBQWlCO1FBRXBELElBQUksT0FBTyxHQUFHO1lBQ1YsR0FBRyxFQUFLLFFBQVEsQ0FBQyxXQUFXLHNCQUFtQjtZQUMvQyxFQUFFLEVBQUU7Z0JBQ0EsYUFBYSxFQUFFLFdBQVc7Z0JBQzFCLGVBQWUsRUFBRSxTQUFTO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVksRUFBRSxpQkFBaUI7YUFDbEM7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNiLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFFakIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxHQUFHO1FBRXBCLENBQUMsQ0FBQyxDQUFDO0lBR1gsQ0FBQztJQUdMLDhCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSwrQkFBdUIsMEJBaUNuQyxDQUFBIn0=
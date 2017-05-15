"use strict";
var rp = require('request-promise');
var appmodel = require('../agas.model');
var CashFlowStatement = (function () {
    function CashFlowStatement() {
    }
    CashFlowStatement.prototype.getResponse = function (param) {
        var financialperiodid = param.financialyearid;
        return this.getCashFlowStatement(financialperiodid);
    };
    CashFlowStatement.prototype.getCashFlowStatement = function (finyearid) {
        var options = {
            uri: appmodel.agasbaseurl + "getCashFlowStatement",
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
    return CashFlowStatement;
}());
exports.CashFlowStatement = CashFlowStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FzaEZsb3dTdGF0ZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYXNoRmxvd1N0YXRlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBWSxFQUFFLFdBQU0saUJBQ3BCLENBQUMsQ0FEb0M7QUFDckMsSUFBTyxRQUFRLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFJM0M7SUFBQTtJQTBCQSxDQUFDO0lBekJHLHVDQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ2xCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUU5QyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELGdEQUFvQixHQUFwQixVQUFxQixTQUFpQjtRQUNsQyxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBSyxRQUFRLENBQUMsV0FBVyx5QkFBc0I7WUFDbEQsRUFBRSxFQUFFO2dCQUVBLGVBQWUsRUFBRSxTQUFTO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVksRUFBRSxpQkFBaUI7YUFDbEM7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNiLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxHQUFHO1FBRXBCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSx5QkFBaUIsb0JBMEI3QixDQUFBIn0=
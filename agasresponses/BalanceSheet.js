"use strict";
var rp = require('request-promise');
var appmodel = require('../agas.model');
var BalanceSheet = (function () {
    function BalanceSheet() {
    }
    BalanceSheet.prototype.getResponse = function (param) {
        var financialperiodid = param.financialyearid;
        return this.getBalanceSheet(financialperiodid);
    };
    BalanceSheet.prototype.getBalanceSheet = function (finyearid) {
        var options = {
            uri: appmodel.agasbaseurl + "getbalancesheet",
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
    return BalanceSheet;
}());
exports.BalanceSheet = BalanceSheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jZVNoZWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFsYW5jZVNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFZLEVBQUUsV0FBTSxpQkFDcEIsQ0FBQyxDQURvQztBQUNyQyxJQUFPLFFBQVEsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUl6QztJQUFBO0lBK0JFLENBQUM7SUE5Qkcsa0NBQVcsR0FBWCxVQUFZLEtBQVU7UUFDbEIsSUFBSSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELHNDQUFlLEdBQWYsVUFBZ0IsU0FBaUI7UUFFN0IsSUFBSSxPQUFPLEdBQUc7WUFDVixHQUFHLEVBQUssUUFBUSxDQUFDLFdBQVcsb0JBQWlCO1lBQzdDLEVBQUUsRUFBRTtnQkFFQSxlQUFlLEVBQUUsU0FBUzthQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDTCxZQUFZLEVBQUUsaUJBQWlCO2FBQ2xDO1lBQ0QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO1FBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDYixJQUFJLENBQUMsVUFBVSxLQUFLO1lBRWpCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQVUsR0FBRztRQUVwQixDQUFDLENBQUMsQ0FBQztJQUdYLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUEvQkgsSUErQkc7QUEvQlcsb0JBQVksZUErQnZCLENBQUEifQ==
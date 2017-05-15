"use strict";
var rp = require('request-promise');
var appmodel = require('../agas.model');
var AGASAlertRequest = (function () {
    function AGASAlertRequest() {
    }
    AGASAlertRequest.prototype.processRequest = function (requestid, param) {
        var responseurl = appmodel.firebasebaseurl + "AGASAlertResponse.json";
        param.firebaseresponsepath = responseurl;
        return this.createAGASAlertRequest(requestid, param);
    };
    AGASAlertRequest.prototype.createAGASAlertRequest = function (requestid, param) {
        var options = {
            method: 'POST',
            uri: appmodel.agasbaseurl + "createdalertrequest",
            body: {
                requestid: requestid,
                parameter: JSON.stringify(param)
            },
            json: true
        };
        return rp(options)
            .then(function (repos) {
        })
            .catch(function (err) {
        });
    };
    return AGASAlertRequest;
}());
exports.AGASAlertRequest = AGASAlertRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUdBU0FsZXJ0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFHQVNBbGVydFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQVksRUFBRSxXQUFNLGlCQUNwQixDQUFDLENBRG9DO0FBQ3JDLElBQU8sUUFBUSxXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBRzNDO0lBQUE7SUE2QkEsQ0FBQztJQTVCRyx5Q0FBYyxHQUFkLFVBQWUsU0FBaUIsRUFBRSxLQUFVO1FBQ3hDLElBQUksV0FBVyxHQUFNLFFBQVEsQ0FBQyxlQUFlLDJCQUF3QixDQUFDO1FBQ3RFLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELGlEQUFzQixHQUF0QixVQUF1QixTQUFpQixFQUFFLEtBQVU7UUFFaEQsSUFBSSxPQUFPLEdBQUc7WUFDVixNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBSyxRQUFRLENBQUMsV0FBVyx3QkFBcUI7WUFDakQsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDbkM7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNiLElBQUksQ0FBQyxVQUFVLEtBQUs7UUFHckIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQVUsR0FBRztRQUVwQixDQUFDLENBQUMsQ0FBQztJQUdYLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3Qlksd0JBQWdCLG1CQTZCNUIsQ0FBQSJ9
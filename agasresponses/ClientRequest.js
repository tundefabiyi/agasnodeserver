"use strict";
var rp = require('request-promise');
var appmodel = require('../agas.model');
var ClientRequest = (function () {
    function ClientRequest() {
    }
    ClientRequest.prototype.processRequest = function (serverResponder, param) {
        return this.createAGASAlertRequest(serverResponder, param);
    };
    ClientRequest.prototype.createAGASAlertRequest = function (serverResponder, param) {
        var options = {
            method: 'POST',
            uri: appmodel.agasbaseurl + "createmobilerequest",
            body: {
                serverResponder: serverResponder,
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
    return ClientRequest;
}());
exports.ClientRequest = ClientRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNsaWVudFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQVksRUFBRSxXQUFNLGlCQUNwQixDQUFDLENBRG9DO0FBQ3JDLElBQU8sUUFBUSxXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBRzNDO0lBQUE7SUE0QkEsQ0FBQztJQTNCRyxzQ0FBYyxHQUFkLFVBQWUsZUFBdUIsRUFBRSxLQUFVO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCw4Q0FBc0IsR0FBdEIsVUFBdUIsZUFBdUIsRUFBRSxLQUFVO1FBRXRELElBQUksT0FBTyxHQUFHO1lBQ1YsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUssUUFBUSxDQUFDLFdBQVcsd0JBQXFCO1lBQ2pELElBQUksRUFBRTtnQkFDRixlQUFlLEVBQUUsZUFBZTtnQkFDaEMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO1FBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDYixJQUFJLENBQUMsVUFBVSxLQUFLO1FBR3JCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEdBQUc7UUFFcEIsQ0FBQyxDQUFDLENBQUM7SUFHWCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLHFCQUFhLGdCQTRCekIsQ0FBQSJ9
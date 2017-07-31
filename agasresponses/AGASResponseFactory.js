"use strict";
var admin = require('firebase-admin');
var responseNS = require("../agasresponses/IAGASResponse");
var GPFSNoteQuery_1 = require("./GPFSNoteQuery");
var AGASAlertRequest_1 = require("./AGASAlertRequest");
var ClientRequest_1 = require("./ClientRequest");
var AGASResponseFactory = (function () {
    function AGASResponseFactory() {
    }
    AGASResponseFactory.prototype.processRequest = function () {
        var db = admin.database();
        var agasrequestref = db.ref("AGASRequest");
        agasrequestref.on("child_added", function (snapshot, prevChildKey) {
            var newrequest = snapshot.val();
            var responsetype = responseNS.AGASRequestType[newrequest.aGASRequestType];
            var agasserver = new responseNS[responsetype];
            agasserver.getResponse(newrequest.param).then(function (res) {
                var responseref = db.ref("AGASResponse/" + snapshot.key);
                responseref.set(res);
                var requestref = db.ref("AGASRequest/" + snapshot.key);
                requestref.remove();
                console.log("Removed " + snapshot.key);
            });
        });
        var agasGPFSNoterequestref = db.ref("AGASGPFSNoteRequest");
        agasGPFSNoterequestref.on("child_added", function (snapshot, prevChildKey) {
            var newrequest = snapshot.val();
            var agasserver = new GPFSNoteQuery_1.GPFSNoteQuery();
            agasserver.getResponse(newrequest).then(function (res) {
                var responseref = db.ref("AGASGPFSNoteResponse/" + snapshot.key);
                responseref.set(res);
                var requestref = db.ref("AGASGPFSNoteRequest/" + snapshot.key);
                requestref.remove();
                console.log("Removed " + snapshot.key);
            });
        });
        var agasAlertrequestref = db.ref("AGASAlertRequest");
        agasAlertrequestref.on("child_added", function (snapshot, prevChildKey) {
            var newrequest = snapshot.val();
            console.log(newrequest);
            var agasserver = new AGASAlertRequest_1.AGASAlertRequest();
            agasserver.processRequest(snapshot.key, newrequest).then(function (res) {
                var requestref = db.ref("AGASAlertRequest/" + snapshot.key);
                requestref.remove();
                console.log("Removed " + snapshot.key);
            });
        });
        var clientRequestref = db.ref("ClientRequest");
        clientRequestref.on("child_added", function (snapshot, prevChildKey) {
            var newrequest = snapshot.val();
            console.log(newrequest);
            var agasserver = new ClientRequest_1.ClientRequest();
            agasserver.processRequest(newrequest.serverResponder, newrequest.parameter).then(function (res) {
                var requestref = db.ref("ClientRequest/" + snapshot.key);
                requestref.remove();
                console.log("Removed " + snapshot.key);
            });
        });
    };
    return AGASResponseFactory;
}());
exports.AGASResponseFactory = AGASResponseFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUdBU1Jlc3BvbnNlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFHQVNSZXNwb25zZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksS0FBSyxXQUFNLGdCQUFnQixDQUFDLENBQUE7QUFDeEMsSUFBWSxVQUFVLFdBQU0sZ0NBRTVCLENBQUMsQ0FGMkQ7QUFHNUQsOEJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsaUNBQWlDLG9CQUFvQixDQUFDLENBQUE7QUFDdEQsOEJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFJaEQ7SUFDSTtJQUFnQixDQUFDO0lBQ2pCLDRDQUFjLEdBQWQ7UUFDSSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxjQUFjLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLFFBQVEsRUFBRSxZQUFZO1lBQzdELElBQUksVUFBVSxHQUFvQixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFakQsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDekUsSUFBSSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDN0MsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMs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
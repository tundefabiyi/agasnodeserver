import * as admin from 'firebase-admin';
import * as responseNS from "../agasresponses/IAGASResponse"

import { AGASRequestInfo } from "../agas.model";
import { GPFSNoteQuery } from "./GPFSNoteQuery";
import { AGASAlertRequest } from "./AGASAlertRequest";
import { ClientRequest } from "./ClientRequest";



export class AGASResponseFactory {
    constructor() { }
    processRequest() {
        var db = admin.database();
        var agasrequestref = db.ref("AGASRequest");
        agasrequestref.on("child_added", function (snapshot, prevChildKey) {
            var newrequest = <AGASRequestInfo>snapshot.val();
            // console.log(newrequest);
            var responsetype = responseNS.AGASRequestType[newrequest.aGASRequestType]
            var agasserver = new responseNS[responsetype];
            agasserver.getResponse(newrequest.param).then(res => {
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
            var agasserver = new GPFSNoteQuery();
            agasserver.getResponse(newrequest).then(res => {
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
            var agasserver = new AGASAlertRequest();

            agasserver.processRequest(snapshot.key, newrequest).then(res => {

                var requestref = db.ref("AGASAlertRequest/" + snapshot.key);
                requestref.remove();
                console.log("Removed " + snapshot.key);
            });
        });
        var clientRequestref = db.ref("ClientRequest");
        clientRequestref.on("child_added", function (snapshot, prevChildKey) {
            var newrequest = snapshot.val();
            console.log(newrequest);
            var agasserver = new ClientRequest();
            agasserver.processRequest(newrequest.serverResponder, newrequest.parameter).then(res => {

                var requestref = db.ref("ClientRequest/" + snapshot.key);
                requestref.remove();
                console.log("Removed " + snapshot.key);
            });
        });
    }
}

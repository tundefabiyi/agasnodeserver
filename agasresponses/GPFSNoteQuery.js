"use strict";
var rp = require('request-promise');
var appmodel = require('../agas.model');
var GPFSNoteQuery = (function () {
    function GPFSNoteQuery() {
    }
    GPFSNoteQuery.prototype.getResponse = function (param) {
        return this.getGPFSNote(param.code, param.segmenttype, param.notetype, param.financialyearid);
    };
    GPFSNoteQuery.prototype.getGPFSNote = function (code, segmenttype, notetype, financialyearid) {
        var options = {
            uri: appmodel.agasbaseurl + "getGPFSNote",
            qs: {
                financialyearid: financialyearid,
                notetype: notetype,
                code: code,
                segmenttype: segmenttype
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
    return GPFSNoteQuery;
}());
exports.GPFSNoteQuery = GPFSNoteQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1BGU05vdGVRdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdQRlNOb3RlUXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQVksRUFBRSxXQUFNLGlCQUNwQixDQUFDLENBRG9DO0FBQ3JDLElBQU8sUUFBUSxXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBR3pDO0lBQUE7SUFpQ0UsQ0FBQztJQWhDRyxtQ0FBVyxHQUFYLFVBQVksS0FBVTtRQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUNELG1DQUFXLEdBQVgsVUFBWSxJQUFXLEVBQUMsV0FBa0IsRUFBQyxRQUFlLEVBQUUsZUFBdUI7UUFFL0UsSUFBSSxPQUFPLEdBQUc7WUFDVixHQUFHLEVBQUssUUFBUSxDQUFDLFdBQVcsZ0JBQWE7WUFDekMsRUFBRSxFQUFFO2dCQUVBLGVBQWUsRUFBRSxlQUFlO2dCQUNoQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsSUFBSSxFQUFDLElBQUk7Z0JBQ1QsV0FBVyxFQUFDLFdBQVc7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWSxFQUFFLGlCQUFpQjthQUNsQztZQUNELElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUVGLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ2IsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUVqQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEdBQUc7UUFFcEIsQ0FBQyxDQUFDLENBQUM7SUFHWCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBakNILElBaUNHO0FBakNXLHFCQUFhLGdCQWlDeEIsQ0FBQSJ9
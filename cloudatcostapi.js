/*
CloudatCostAPI Node.js Wrapper by Cellularhacker(http://github.org/cellularhacker)
Version 1.0
*/

const https = require('https');
var API = require('./cloudatcostAPI_KEY.js');


var baseURL = 'https://panel.cloudatcost.com/api/v1/';  // For API URL

// Functions
// CCAPI-00. base API Function.
function baseAPIfunc(reqService, cb) {
    var getURL = baseURL + reqService + '?key=' + API.KEY + '&login=' + API.login;

    https.get(getURL, (res) => {
        //Console.log('statusCode: ', res.statusCode);
        //Console.log('headers: ', res.headers);
        Console.log("[CloudAtCostAPI] " + reqService);
        
        res.on('data', (d) => {
            var data = JSON.stringify(d);

            Console.log("[CloudAtCostAPI] JSON has been successfully parsed!");

            cb(d);
        });
    }).on('error', (e) => {
        Console.log("[CloudAtCostAPI] JSON parsing Error!");
    });
};
// CCAPI-01. getting [Server_lists] by using cloudatcostAPI
exports.getListservers = function(cb) {
    baseAPIfunc('listservers.php', function (result) {
        cb(result);
    });
};
// CCAPI-02. getting [Templates] by using cloudatcostAPI
exports.getTemplates = function(cb) {
    baseAPIfunc('listtemplates.php', function (result) {
        cb(result);
    });
};
// CCAPI-03. getting [List_Tasks] by using cloudatcost API
exports.getListtasks = function(cb) {
    baseAPIfunc('listtasks.php', function (result) {
        cb(result);
    });
};
// CCAPI-04. getting [CloudAtCost Resources] by using cloudatcost API
exports.getResources = function(cb) {
    baseAPIfunc('cloudpro/resources.php', function (result) {
        cb(result);
    });
};
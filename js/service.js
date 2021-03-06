app.service('getData', ["$http", "$location", function($http, $location) {

    //get account data from REST service
    this.getAccountData = function(callback) {
        $http.get("./data/data.json").then(callback);
    }

    //Format data
    this.polish = function(data) {
        var dataCombined = {
            accountsData: [],
            accHeadings: [],
            accVal: []
        };
        dataCombined.accountsData = data.profile.accounts;
        for (var i = 0; i < dataCombined.accountsData.length; i++) {
            var accKeys = Object.keys(dataCombined.accountsData[i]);
            dataCombined.accVal[i] = dataCombined.accountsData[i][accKeys[0]];
            var max = 0;
            for (var j = 0; j < dataCombined.accVal[i].length; j++) {
                var accountTypes = Object.keys(dataCombined.accVal[i][j]);
                if (max < accountTypes.length) {
                    max = accountTypes.length;
                    dataCombined.accHeadings[i] = accountTypes;
                }
            }
        }
        return dataCombined;
    }

}]);
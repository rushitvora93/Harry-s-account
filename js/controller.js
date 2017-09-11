app.controller("accountController", ["$scope", "$translate", "getData", function($scope, $translate, getData) {

    $scope.accHeadings = [];
    $scope.accountsData = [];
    $scope.accVal = [];
    $scope.currentSort = 'order';

    $scope.getNumber = function(singleRow, headingArray) {
        var a = Object.keys(singleRow).length;
        var length = headingArray.length - (Object.keys(singleRow).length - 1);
        return new Array(length);
    }

    $scope.reset = function() {
        $scope.accType = "";
        $scope.currentSort = "order";
        $scope.sortDirection = '';
    }


    getData.getAccountData(function(response) {
        $scope.data = response.data;
        $translate.use($scope.data.profile.lang);

        var polishedData = getData.polish($scope.data);
        $scope.accHeadings = polishedData.accHeadings;
        $scope.accountsData = polishedData.accountsData;
        $scope.accVal = polishedData.accVal;

    })

}]);
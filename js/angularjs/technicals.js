myCv.controller('TechnicalsCtrl', ['$scope', '$http', function TechnicalsCtrl($scope, $http) {
    $scope.technicals = [];

    $http.get('./data/cv-technicals.json').success(function(data) {
        $scope.technicals = data.technicals;
    });
}]);
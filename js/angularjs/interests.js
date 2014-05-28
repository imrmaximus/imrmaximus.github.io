myCv.controller('InterestsCtrl', ['$scope', '$http', '$sce', function InterestsCtrl($scope, $http, $sce) {
    $scope.interests = [];

    $http.get('./data/cv-interests.json').success(function(data) {
        $scope.interests = data.interests;
    });
}]);
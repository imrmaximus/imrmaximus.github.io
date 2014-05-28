myCv.controller('TrainingsCtrl', ['$scope', '$http', '$sce', function TrainingsCtrl($scope, $http, $sce) {
    $scope.trainings = [];

    $http.get('./data/cv-trainings.json').success(function(data) {
        $scope.trainings = data.training;

        $.each($scope.trainings, function(index, value){
            value.contentIsArray = angular.isArray(value.contents);
        });
    });

    $scope.basic_info = function(content, location) {
        return '' + content + ' - ' + location;
    };

    $scope.deliberatelyTrustDangerousSnippet = function(sentence) {
        return $sce.trustAsHtml(sentence);
    };
}]);
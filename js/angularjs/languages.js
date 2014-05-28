myCv.controller('LanguagesCtrl', ['$scope', '$http', '$sce', function LanguagesCtrl($scope, $http, $sce) {
    $scope.languages = [];

    $http.get('./data/cv-languages.json').success(function(data) {
        $scope.languages = data.languages;
    });

    $scope.deliberatelyTrustDangerousSnippet = function(sentence) {
        return $sce.trustAsHtml(sentence);
    };
}]);
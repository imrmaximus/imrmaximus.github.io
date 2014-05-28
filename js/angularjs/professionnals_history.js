myCv.controller('ProfessionnalHistoryCtrl', ['$scope', '$http', '$sce', function ProfessionnalHistoryCtrl($scope, $http, $sce) {
    $scope.professionnal_history = [];

    $http.get('./data/cv-professionnal_history.json').success(function(data) {

        $scope.professionnal_history = data.professionnal_history;

        $.each($scope.professionnal_history, function(index, society) {
            var start_Date = new Date(society.role[0].startDate);
            var end_Date = new Date(society.role[society.role.length-1].endDate);

            society.start_date = start_Date.toLocaleDateString();
            society.end_date = end_Date.toLocaleDateString();

            $.each(society.role, function(indexx, aRole) {
                aRole.startDate = ''+(new Date(aRole.startDate)).toLocaleDateString();
                aRole.endDate = ''+(new Date(aRole.endDate)).toLocaleDateString();
            });
        });

    });

    $scope.deliberatelyTrustDangerousSnippet = function(sentence) {
        return $sce.trustAsHtml(sentence);
    };
}]);
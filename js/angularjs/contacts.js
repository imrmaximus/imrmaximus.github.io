myCv.controller('ContactCtrl', ['$scope', '$http', function ContactCtrl($scope, $http) {
    $scope.contact = {};
    $scope.title = '';
    $scope.birth = [];

    $http.get('./data/cv-contacts-title.json').success(function(data) {
        $scope.contact = data.contacts;
        $scope.title = data.title;

        var birthDate = new Date(data.contacts.birth.date);
        $scope.birth = ["Né le " + birthDate.toLocaleDateString(), "Nationalité : " + data.contacts.birth.nationality];

        var prepareEmailGravatar = $.trim(data.contacts.gravatar.toLowerCase());
        var gravatar = $.md5(prepareEmailGravatar);
        $(".photo").html("<img id='img-profil' src='http://www.gravatar.com/avatar/"+gravatar+".jpg?s=225' class='round center-block'/>");
    });
}]);
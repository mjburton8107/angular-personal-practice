angular.module('appName').controller('mainCtrl', function($scope){

  $scope.niceList = [];
  $scope.naughtyList = [];

  $scope.addNewPerson = function(){
    var differenceScore = $scope.niceScore - $scope.naughtyScore;

    if (differenceScore >= 10){
      $scope.niceList.push(buildPerson(differenceScore));
    } else {
        $scope.naughtyList.push(buildPerson(differenceScore));
    }
  };

function buildPerson(differenceScore){
  return {
    name: $scope.name,
    score: differenceScore
  }
}

})

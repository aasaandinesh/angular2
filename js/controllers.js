
var candidateApp = angular.module('candidateApp',[]);

candidateApp.controller('candidateController', function($scope){



    $scope.candidates = [];

    $scope.addCandidate = function(candidateName){


      $scope.candidates.push({"name":candidateName, "placed":false});
        $scope.candidateName="";
    };

    $scope.placeCandidate = function(candidate){
      var placedCandidateIndex = $scope.candidates.indexOf(candidate);


        if(placedCandidateIndex >-1){
            $scope.candidates[placedCandidateIndex]["placed"] = !$scope.candidates[placedCandidateIndex]["placed"];
        }

    };


});

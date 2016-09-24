'use strict';

angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "dataset";

    function fetch(){
      $http.get("https://data.overheid.nl/data/api/3/action/package_search?q=" + $scope.search)
      .then(function(response){ $scope.details = response.data; });
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });



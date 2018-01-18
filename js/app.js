angular.module('app', [])
  .controller('HomeController', function ($scope, $http) {

    $http.get('data/episodes.json').then(function (result) {
      $scope.episodes = result.data;
    });
  });
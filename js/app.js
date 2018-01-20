var app = angular.module('app', [])

app.controller('HomeController', function ($scope, $http) {
  $http.get('data/episodes.json').then(function (result) {
    $scope.episodes = result.data;
  });
});

app.filter('GetYouTubeUrl', function ($sce) {
    return function (url) {
      return $sce.trustAsResourceUrl(url);
    };
  }
);
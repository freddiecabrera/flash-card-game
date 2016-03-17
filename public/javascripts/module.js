'use strict';

var app = angular.module('flashCardApp', ['ui.router']);

app.directive('repeatDone', function() {
  return function(scope, element, attrs) {
    if(scope.$last){
      scope.$eval(attrs.repeatDone);
    }
  }
});

app.run(function(Services) {
  Services.getList();
});

app.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('cards', {
      url: "/",
      templateUrl: "states/main.html",
      controller: "cardCtrl"
    })
    .state("game", {
      url: "/game",
      templateUrl: "states/game.html",
      controller: "gameCtrl"
    })
  $urlRouterProvider.otherwise("/")
})

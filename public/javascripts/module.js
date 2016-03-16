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
    .state('list', {
      url: "/list",
      templateUrl: "/html/list.html",
      controller: "listCtrl"
    })
    .state("detail", {
      url: "/detail",
      templateUrl: "/html/detail.html",
      controller: "detailCtrl"
    })
  $urlRouterProvider.otherwise("/")
})

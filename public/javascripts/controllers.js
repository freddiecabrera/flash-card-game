'use strict';

var app = angular.module("flashCardApp")

app.controller("cardCtrl", ($scope, Services) => {
  $scope.navContainer = true;
  $scope.showNavBar = false;

  $scope.navBar = () => {
    $scope.navContainer = false;
    $scope.showNavBar = true;
  }

  $scope.addCard = () => {
    $scope.showNavBar = false;
    $scope.navContainer = true;
    Services.addCard($scope.newCard).then((res)=>{
      $scope.list.push(res.data);
    }, (err) => {
      console.log(err);
    });
  }

  $scope.initModals = function() {
    $('.modal-trigger').leanModal();
  }

  $scope.$watch(function() {
    return Services.list
  }, function(newVal, oldVal) {
    $scope.list = newVal
  });


  $scope.deleteCard = (card, id) => {
    console.log('id', id);
    console.log('card', card);
    $scope.list.splice(card, 1);
    Services.delete(id).then(function() {
      //var index = $scope.list.indexOf(card)
    });
  }

  // $scope.edit = (upItem) => {
  //
  //   Item.edit(item, upItem).then((res) => {
  //     console.log(res)
  //   })
  // }

})

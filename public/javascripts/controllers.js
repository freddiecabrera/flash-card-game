'use strict';

var app = angular.module("flashCardApp")
// 
// app.controller("cardCtrl", ($scope, Services) => {
//   $scope.initModals = function() {
//     $('.modal-trigger').leanModal();
//   }

  $scope.$watch(function() {
    return Services.list
  }, function(newVal, oldVal) {
    $scope.list = newVal
  });

  // Item.get().then((res) => {
  //   var items = res.data
  //   $scope.items = items
  // }, function(err) {
  //   console.log(err)
  // })
  //
  // $scope.add = () => {
  //
  //   Item.add($scope.newItem).then((res) => {
  //     $scope.items.push(res.data)
  //   })
  // }
  //
  // $scope.delete = (item) => {
  //
  //   Item.delete(item).then(function() {
  //     var index = $scope.items.indexOf(item)
  //     $scope.items.splice(index, 1)
  //   })
  // }
  //
  // $scope.edit = (upItem) => {
  //
  //   Item.edit(item, upItem).then((res) => {
  //     console.log(res)
  //   })
  // }

})

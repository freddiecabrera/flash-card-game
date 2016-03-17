'use strict';

var app = angular.module("flashCardApp")


app.controller("gameCtrl", ($scope, Services, $state) => {
  var random = Math.floor(Math.random() * Services.list.length);
  $scope.single = Services.list[random];

  $scope.nextCard = () => {
    var random = Math.floor(Math.random() * Services.list.length);
    $scope.single = Services.list[random];
    };
});

app.controller("navCtrl", ($scope, Services, $state) => {
  $scope.play = () => {
    $state.go("game")
  }
  $scope.goHome = () => {
    $state.go("cards")
  }
});


app.controller("cardCtrl", ($scope, Services, $state) => {

  console.log('klsjdflisdfj');



  $scope.cardId;

  $scope.getCard = (card) => {
    $scope.cardId = card;
  }

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
    var index = $scope.list.indexOf(card)
    $scope.list.splice(index, 1);
    Services.delete(id).then(function() {
    });
  }

  $scope.edit = (updateObj) => {
    var card = $scope.cardId;
    console.log('card', card);
    console.log('id', card.id);
    console.log('updateObj', updateObj);
    Object.assign(card, updateObj)
    Services.edit(card.id, updateObj).then((res) => {
      console.log(res)
    })
  }

  // $scope.edit = (upItem) => {
  //
  //   Item.edit(item, upItem).then((res) => {
  //     console.log(res)
  //   })
  // }

})

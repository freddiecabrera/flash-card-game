'use strict';

var app = angular.module('flashCardApp');


app.service("Services", function($http) {
      this.getList = () => {
        $http.get("/cards").then(res => {
          this.list = res.data;
        }, err => {
          console.error("Service Error ", err);
        });
    };

    this.addCard = (data) => {
      return $http.post('/cards', data)
    }

    this.delete = (currentData) => {
      return $http.delete(`/cards/${currentData}`);
    }

    this.edit = (id, newCard) => {
      return $http.put(`/cards/${id}`, newCard);
    }
  });

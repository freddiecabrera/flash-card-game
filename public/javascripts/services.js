'use strict';

var app = angular.module('flashCardApp');

// app.service("Services", function($http) {
//
//   this.get = () => {
//     return $http.get("/cards")
//   }
//
//   this.add = (data) => {
//     return $http.post("/cards", data)
//   }
//

//
//   this.edit = (oldData, currentData) => {
//     return $http.put(("/cards/", currentData)
//   }
// })

app.service("Services", function($http) {
      this.getList = () => {
        $http.get("/cards").then(res => {
          this.list = res.data;
        }, err => {
          console.error("Service Error ", err)
        })
    };

    this.addCard = (data) => {
      return $http.post('/cards', data)
    }

    this.delete = (currentData) => {
      return $http.delete(`/cards/${currentData}`);
    }
  });



    // this.getDetails = (url, cb) => {
    //   return $http.get(url).then(res => {
    //     cb(res.data)
    //   })
    // }
    //
    // let store = {};
    //
    // this.storeData = (id, data) => {
    //   store[id] = data
    //   return
    // }
    //
    // this.getData = (id) => {
    //   console.log(store[id])
    //   return store[id]
    //
    // }

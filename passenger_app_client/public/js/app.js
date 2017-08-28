console.log("frontend passenger app.js");



var app = angular.module('passengerRegistration', []);

app.controller('mainController', ['$http', function($http){

   this.message = "angular functioning~";
   this.notRegistered = false;
   this.searched;
   this.found;
   this.displayInfo = false;
   this.needToEdit = false;
   this.editingDone = true;
   this.info = {};
   this.notValid = false;

   ////////////////////////////////////////
   //search()
   ////////////////////////////////////////
   this.search = function(valid){
      console.log(valid);
      if(valid){
         //remove all dashes from social
         var social = this.info.social;
         console.log(social);
         social = social.replace(/-/g, "");
         // Make search input name lowercase
         var name = this.info.name;
         name = name.toLowerCase();

         //Send request
         $http({
            method: 'GET',
            url: 'http://localhost:3000/users',
         }).then(function(response) {
            console.log(response);
            // Loop through users to find a match if one exists.
            for (var i = 0; i < response.data.users.length; i++) {
               var dbName = response.data.users[i].name;
               var dbSocial = response.data.users[i].social;
               dbSocial = dbSocial.replace(/-/g, "");

               if(dbName.toLowerCase() == name && dbSocial.replace(/-/g, "") == social){
                  console.log(dbName);
                  console.log(name);
                  console.log("It's a match!");
                  //if a match, show user information, hide forms
                  this.retry = false;
                  this.found = true;
                  this.displayInfo = true;
                  this.searched = true;
                  //reassign
                  this.info.id = response.data.users[i].id;
                  this.info.name = dbName;
                  this.info.social = dbSocial;
                  this.info.address = response.data.users[i].address;
                  this.info.phone = response.data.users[i].phone;
                  return;
               } else if(i == response.data.users.length - 1 && dbSocial.replace(/-/g, "") != social){
                  // If no match, show registration form
                  console.log("not a match:(");
                  this.notRegistered = true;
                  this.searched = true;
               } else if (i == response.data.users.length - 1 &&  dbSocial.replace(/-/g, "") == social) {
                  console.log("2");
                  this.retry = true;
               }
            };
         }.bind(this));
      } else {
         console.log("not valid");
      }

   };

   ////////////////////////////////////////
   //register()
   ////////////////////////////////////////
   this.register = function(valid){
      if(valid){
         $http({
            method: 'POST',
            url: 'http://localhost:3000/users',
            data: {
               name: this.info.name,
               social: this.info.social,
               phone: this.info.phone,
               address: this.info.address
            }
         }).then(function(response) {
            console.log(response);
            if(response.data.status = 201){
               this.info.id = response.data.user.id;
               this.info.name = response.data.user.name;
               this.info.social = response.data.user.social;
               this.info.address = response.data.user.address;
               this.info.phone = response.data.user.phone;

               //show registered user with option to edit.
               this.displayInfo = true;
               this.notRegistered = false;
            } else {
               console.log('need to have a reset here');
            }
         }.bind(this));
      }

   };

   ////////////////////////////////////////
   //showEdit()
   ////////////////////////////////////////
   this.showEdit = function(){
      this.needToEdit = true;
      this.displayInfo = false;
   };

   ////////////////////////////////////////
   //update()
   ////////////////////////////////////////
   this.update = function(id, valid){
      if(valid){
         this.notValid = false;
         console.log(id);
         console.log(this.info);
         $http({
            method: 'PUT',
            url: 'http://localhost:3000/users/'+id,
            data: {
               name: this.info.name,
               social: this.info.social,
               phone: this.info.phone,
               address: this.info.address
            }
         }).then(function(response) {
            console.log(response.data);
            if(response.data.status = 200){

               this.info.id = response.data.user.id;
               this.info.name = response.data.user.name;
               this.info.social = response.data.user.social;
               this.info.address = response.data.user.address;
               this.info.phone = response.data.user.phone;

               //show updated user with option to edit/ hide edit forms.
               this.updated= true;
               this.displayInfo = true;
               this.needToEdit = false;
            } else {
               console.log("need reset");
            }
         }.bind(this));
      } else {
         this.notValid = true;
      }
   };
   ////////////////////////////////////////
   //reset()
   ////////////////////////////////////////
   this.reset = function(){

      this.searched = false;
      this.displayInfo = false;
      this.notRegistered = false;
      this.needToEdit = false;
      this.info = {
         'name': '',
         'social': '',
         'phone': '',
         'address': '',
         'id': ''
      };
   };
}]);

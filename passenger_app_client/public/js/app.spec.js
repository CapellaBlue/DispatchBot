//my very first test! Testing the controller.

describe('Testing mainController', function(){
   var $controller;

   beforeEach(function(){
      module('passengerRegistration');
      inject(function(_$controller_){
         $controller = _$controller_;
      });
   });

   //Test this.message
   it('this.message should return \'angular functioning~\'', function(){
      var $scope = {};
      //
      var controller = $controller('mainController', { $scope: $scope });

      expect(controller.message).toEqual('angular functioning~')
   });

   //test this.search()
   describe('controller.search', function(){
      var $scope, controller;
      //
      beforeEach(function(){
         $scope = {};
         controller = $controller('mainController', { $scope: $scope });
      })

      it('removes hyphens from the social', function(){
         controller.info.social = '123-12-1234';
         controller.info.name = 'Amanda Test';
         controller.search(true);

         expect(controller.social).toEqual('123121234');
      });
   });

   //test test()
   // it('this.message should return \'hello\'', function(){
   //    var $scope = {};
   //    //
   //    var controller = $controller('mainController', { $scope: $scope });
   //
   //    expect(controller.test()).toEqual('hello')
   // });

});

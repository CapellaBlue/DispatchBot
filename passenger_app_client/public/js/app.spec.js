//my very first test! Testing the controller.

describe('Testing mainController', function(){
   var $scope, $controller;

   beforeEach(function(){
      module('passengerRegistration');
      inject(function(_$controller_, _$httpBackend_){

         $controller = _$controller_;
         $httpBackend = _$httpBackend_;
         $httpBackend.whenGET('http://localhost:3000/users').respond(200);

      });
   });
   //////////////////////////////////////
   //Test this.message
   //////////////////////////////////////

   it('this.message should return \'angular functioning~\'', function(){
      var $scope = {};
      //
      var controller = $controller('mainController', { $scope: $scope });

      expect(controller.message).toEqual('angular functioning~')
   });

   //////////////////////////////////////
   //test this.showEdit()
   //////////////////////////////////////

   it('should return this.needToEdit as true', function(){
      var $scope = {};
      var controller = $controller('mainController', { $scope: $scope });

      controller.showEdit();
      expect(controller.needToEdit).toEqual(true);
   });

   it('should return this.displayInfo as false', function(){
      var $scope = {};
      var controller = $controller('mainController', { $scope: $scope });

      controller.showEdit();
      expect(controller.displayInfo).toEqual(false);
   });

   //////////////////////////////////////
   //test this.search()
   //////////////////////////////////////

   it('removes hyphens from the social', function(){
      var $scope = {};
      var controller = $controller('mainController', { $scope: $scope });
      controller.info.social = '123-12-1234';
      controller.info.name = 'Amanda Test';
      controller.search(true);
      // $httpBackend.flush();

      expect(controller.social).toEqual('123121234');
   });

   it('removes reduces this.name characters to lowercase', function(){
      var $scope = {};
      var controller = $controller('mainController', { $scope: $scope });
      controller.info.social = '123-12-1234';
      controller.info.name = 'Amanda Test';
      controller.search(true);
      // $httpBackend.flush();

      expect(controller.name).toEqual('amanda test');
   });

});

'use strict';

/**
 * @ngdoc function
 * @name teamderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamderApp
 */
angular.module('teamderApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

   .controller('logInCtrl', function($scope) {
    $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
  })
   .controller('ViewCtrl', function($scope,$location) {
    $scope.changeView = function(view){
            $location.path(view); // path not hash
        }
  })
   .controller('EditCtrl',function($scope, $mdDialog, $mdMedia){
      $scope.user = {
        nom:'Momo',
        prenom:'Lamasse',
        email:'momobossdu92izi@gmail.com',
        adresse:'22 avenue des lilas 92sang',
        tel: '2.7.Z.E.R.O',
        dispo: 'jaja'
      };
      $scope.editInput = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './app/views/input.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = '';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

   
   })
    .controller('ProfilCtrl', ChipsCtrl);
  function ChipsCtrl ($mdConstant) {
    // Use common key codes found in $mdConstant.KEY_CODE...
    this.keys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];
    this.spe = [];
    // Any key code can be used to create a custom separator
    this.comp = [];
    this.int = [];
  }
  function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

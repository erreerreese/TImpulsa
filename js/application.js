(function(){
  var app = angular.module('TImpulsa', ['ui.router', 'uiRouterStyles'])
      .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        // Now set up the states
        $stateProvider
          .state('inicio', {
            url: "/",
            templateUrl: 'views/inicio.html',
            controller: function($scope, $rootScope){
              $rootScope.title='TImpulsa - Inicio';
            }
          })
        .state('material', {
            url: "/material",
            templateUrl: 'views/material.html',
            controller: 'MaterialController',
            data: {
                css: '/css/material.css'
            }
          })
        .state('fotogaleria', {
            url: "/fotogaleria",
            templateUrl: 'views/fotogaleria.html',
            controller: function($scope, $rootScope){
              $rootScope.title='TImpulsa - Fotogaleria';
            }
          })
        .state('sedes', {
            url: "/sedes",
            templateUrl: 'views/sedes.html',
            controller: function($scope, $rootScope){
              $rootScope.title='TImpulsa - Sedes';
            }
          })
        .state('faq', {
            url: "/faq",
            templateUrl: 'views/faq.html',
            controller: function($scope, $rootScope){
              $rootScope.title='TImpulsa - FAQ';
            }
          })
      });

  app.controller("PanelController", function($rootScope) {

  });
})();

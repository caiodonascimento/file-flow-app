/**
 * @author caiodonascimento
 * created on 09.09.2016
 */
(function () {
  'use strict';
  
  angular.module('FileFlow.pages.login', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/pages/login/login.html',
        controller: 'LoginCtrl',
      });
  }

})();

/**
 * @author caiodonascimento
 * created on 09.09.2016
 */
(function () {
  'use strict';
  
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/pages/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
      });
  }

  angular.module('FileFlow.pages.login', [])
    .config(routeConfig);

})();

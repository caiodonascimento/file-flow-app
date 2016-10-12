/**
 * @author caiodonascimento
 * created on 12.09.2016
 */
(function () {
  'use strict';
  
  angular.module('FileFlow.pages.inicio', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('inicio', {
        url: '/inicio',
        abstract: true,
        templateUrl: 'app/pages/inicio/inicio.html',
        controller: 'InicioCtrl',
      });
  }

})();

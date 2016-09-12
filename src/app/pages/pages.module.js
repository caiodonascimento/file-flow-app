/**
 * @author caiodonascimento
 * created on 09.09.2016
 */
(function () {
  'use strict';

  angular.module('FileFlow.pages', [
    'ui.router',

    'FileFlow.pages.login',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }

})();

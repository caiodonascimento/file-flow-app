/**
 * @author caiodonascimento
 * created on 09.09.2016
 */
(function () {
  'use strict';

  angular.module('FileFlow.pages', [
    'ui.router',

    'FileFlow.pages.login',
    'FileFlow.pages.inicio',
    'FileFlow.pages.uploader',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }

})();

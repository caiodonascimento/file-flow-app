/**
 * @author caiodonascimento
 * created on 12.09.2016
 */
(function () {
  'use strict';
  
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('inicio.uploader', {
        url: '/uploader',
        templateUrl: 'app/pages/uploader/uploader.html',
        title: 'Carga masiva',
        sidebarMeta: {
          icon: 'ion-archive',
          order: 0,
        },
      });
  }

  angular.module('FileFlow.pages.uploader', [])
    .config(routeConfig);

})();

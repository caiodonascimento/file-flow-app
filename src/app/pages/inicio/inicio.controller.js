/**
 * @author caiodonascimento
 * created on 12.09.2016
 */
(function () {
  'use strict';

  /** @ngInject */
  function InicioCtrl($scope) {
  	console.log('Inicio ctrl.');
  }

  angular.module('FileFlow.pages.inicio')
      .controller('InicioCtrl', InicioCtrl);

})();

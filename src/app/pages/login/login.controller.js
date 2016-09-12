/**
 * @author caiodonascimento
 * created on 11.09.2016
 */
(function () {
  'use strict';

  /** @ngInject */
  function LoginCtrl($scope) {
  	console.log('Login ctrl.');
  }

  angular.module('FileFlow.pages.login')
      .controller('LoginCtrl', LoginCtrl);

})();

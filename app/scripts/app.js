'use strict';

/**
 * @ngdoc overview
 * @name admissionSystemApp
 * @description
 * # admissionSystemApp
 *
 * Main module of the application.
 */
angular
  .module('admissionSystemApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])


  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list_proposal.html',
        controller: 'ListProposalCtrl'
      })
      .when('/new-proposal', {
        templateUrl: 'views/new_proposal.html',
        controller: 'NewProposalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


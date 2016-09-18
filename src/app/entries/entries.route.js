'use strict';

angular.module('portfolio')
  .config(function($stateProvider) {
    $stateProvider
      .state('entries', {
        url: '/blog/:idEntry',
        templateUrl: 'app/entries/entries.html',
        controller: 'EntriesController',
        controllerAs: 'entry'
      });
  });

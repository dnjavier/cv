'use strict';

angular.module('portfolio')
  .config(function($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/portfolio/:idProject',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'project'
      });
  });

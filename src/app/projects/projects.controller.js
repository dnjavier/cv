(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ProjectsController', ProjectsController);

  /** @ngInject */
  function ProjectsController($log, $stateParams, contentful, $state) {
    var vm = this;
    vm.project = {};
    vm.idProject = $stateParams.idProject;

    if(vm.idProject == '') {
      $state.go('portfolio');
    }

    vm.item = {
      img: 'assets/images/portfolio.png',
      gif: 'assets/images/portfolio.gif',
      title: 'Portfolio',
      state: 'portfolio',
      desc: 'Some of My Works'
    };

    // Get all entries
    contentful
      .entries()
      .then(
        // Success handler
        function(response){
          var entries = response.data;
          for (var i = entries.items.length - 1; i >= 0; i--) {
            if(entries.items[i].sys.id == vm.idProject){
              vm.project = entries.items[i];
              break;
            }
          }
          $log.log(vm.project);
        },
        // Error handler
        function(response){
          $log.log('Oops, error ' + response.status);
          $log.log(response);
        }
      );


  }
})();

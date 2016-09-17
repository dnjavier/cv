(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController(contentful, $log) {
    var vm = this;
    vm.projects = []; 

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
            if(entries.items[i].sys.contentType.sys.id == 'project'){
              vm.projects.push(entries.items[i]);
            }
          }
        },
        // Error handler
        function(response){
          $log.log('Oops, error ' + response.status);
          $log.log(response);
        }
      );
  }
})();

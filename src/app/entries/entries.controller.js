(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('EntriesController', EntriesController);

  /** @ngInject */
  function EntriesController($log, $stateParams, contentful, $state) {
    var vm = this;
    vm.entries = [{}];
    vm.entry = {};
    vm.idEntry = $stateParams.idEntry;

    if(vm.idEntry == '') {
      $state.go('blog');
    }

    vm.item = {
      img: 'assets/images/blog.png',
      gif: 'assets/images/blog.gif',
      title: 'Blog',
      state: 'blog',
      desc: 'This is my thought'
    };

    // Get all entries
    contentful
      .entries()
      .then(
        // Success handler
        function(response){
          var entries = response.data;
          for (var i = entries.items.length - 1; i >= 0; i--) {
            if(entries.items[i].sys.id == vm.idEntry){
              vm.entry = entries.items[i];
              break;
            }
          }
          $log.log(vm.entry);
        },
        // Error handler
        function(response){
          $log.log('Oops, error ' + response.status);
          $log.log(response);
        }
      );


  }
})();

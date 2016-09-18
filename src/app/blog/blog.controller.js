(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($log, contentful) {
    var vm = this;
    vm.entries = [];

    vm.item = {
      img: 'assets/images/blog.png',
      gif: 'assets/images/blog.gif',
      title: 'Blog',
      state: 'blog',
      desc: 'I write here my thoughts'
    };

    // Get all entries
    contentful
      .entries()
      .then(
        // Success handler
        function(response){
          var entries = response.data;
          for (var i = entries.items.length - 1; i >= 0; i--) {
            if(entries.items[i].sys.contentType.sys.id == 'blog'){
              vm.entries.push(entries.items[i]);
            }
          }

          vm.entries.sort(function(a,b){
            return new Date(b.sys.createdAt) - new Date(a.sys.createdAt);
          });
        },
        // Error handler
        function(response){
          $log.log('Oops, error ' + response.status);
          $log.log(response);
        }
      );

  }
})();

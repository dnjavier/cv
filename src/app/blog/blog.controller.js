(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController() {
    var vm = this;

    vm.item = {
      img: 'assets/images/blog.png',
      gif: 'assets/images/blog.gif',
      title: 'Blog',
      state: 'blog',
      desc: 'I write here my thoughts'
    };


  }
})();

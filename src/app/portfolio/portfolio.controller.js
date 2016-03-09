(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController() {
    var vm = this;

    vm.item = {
      img: 'assets/images/portfolio.png',
      gif: 'assets/images/portfolio.gif',
      title: 'Portfolio',
      state: 'portfolio',
      desc: 'Some of My Works'
    };


  }
})();

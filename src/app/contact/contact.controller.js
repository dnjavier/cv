(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController() {
    var vm = this;

    vm.item = {
      img: 'assets/images/contact.png',
      gif: 'assets/images/contact.gif',
      title: 'Contact',
      state: 'contact',
      desc: 'Get in touch with me'
    };


  }
})();

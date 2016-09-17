(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController(contentful, $log) {
    var vm = this;
    vm.profile;

    vm.item = {
      img: 'assets/images/contact.png',
      gif: 'assets/images/contact.gif',
      title: 'Contact',
      state: 'contact',
      desc: 'Get in touch with me'
    };

    // Get entry with profile info
    contentful
      .entry("5OoeqHSUaAGWAWySWw6MGQ")
      .then(
        // Success handler
        function(response){
          vm.profile = response.data.fields;
        },
        // Error handler
        function(response){
          $log.log('Oops, error ' + response.status);
          $log.log(response);
        }
      );

  }
})();

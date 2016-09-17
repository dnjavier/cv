(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(contentful, $log) {
    var vm = this;
    vm.info;

    vm.item = {
      img: 'assets/images/profile.png',
      gif: 'assets/images/profile.gif',
      title: 'Profile',
      state: 'profile',
      desc: 'A brief about me'
    };

    vm.labels = ['', ''];
    vm.data = [50, 50];
    vm.colours = ['#00B6F9','#FFFFFF'];
    vm.green = ['#7fc857','#FFFFFF'];
    vm.red = ['#dd1b16','#FFFFFF'];
    vm.black = ['#353535','#FFFFFF'];
    vm.brown = ['#6e4e37','#FFFFFF'];

    // Get entry with profile info
    contentful
      .entry("5OoeqHSUaAGWAWySWw6MGQ")
      .then(
        // Success handler
        function(response){
          vm.info = response.data.fields;
        },
        // Error handler
        function(response){
          $log.log('Oops, error ' + response.status);
          $log.log(response);
        }
      );
    
  }
})();

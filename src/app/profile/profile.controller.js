(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController() {
    var vm = this;

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

  }
})();

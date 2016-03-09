(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ResumeController', ResumeController);

  /** @ngInject */
  function ResumeController() {
    var vm = this;

    vm.item = {
      img: 'assets/images/resume.png',
      gif: 'assets/images/resume.gif',
      title: 'Resume',
      state: 'resume',
      desc: 'My Academic Qualifications'
    };

    

  }
})();

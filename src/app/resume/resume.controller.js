(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ResumeController', ResumeController);

  /** @ngInject */
  function ResumeController(contentful, $log) {
    var vm = this;
    vm.jobs = [];
    vm.studies = [];

    vm.item = {
      img: 'assets/images/resume.png',
      gif: 'assets/images/resume.gif',
      title: 'Resume',
      state: 'resume',
      desc: 'My Academic Qualifications'
    };

    // Get all entries
    contentful
      .entries()
      .then(
        // Success handler
        function(response){
          var entries = response.data;
          for (var i = entries.items.length - 1; i >= 0; i--) {
            if(entries.items[i].sys.contentType.sys.id == 'work'){
              vm.jobs.push(entries.items[i]);
            }

            if(entries.items[i].sys.contentType.sys.id == 'studies'){
              vm.studies.push(entries.items[i]);
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

/*(function() {
  'use strict';

  angular
    .module('portfolio')
    .service('Profile', Profile);

  function Profile(contentful) {
    var entryId = "5OoeqHSUaAGWAWySWw6MGQ";

    this.getProfile = getProfile;
    
    function getProfile() {
      return contentful.entry(entryId);
        .then(
          // Success handler
          function(response){
            vm.profile = response.data.fields;
            console.log(vm.profile);
          },
          // Error handler
          function(response){
            console.log('Oops, error ' + response.status);
            console.log(response);
          }
        );
    }

  }

})();
*/
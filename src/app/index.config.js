(function() {
  'use strict'; 

  angular
    .module('portfolio')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, contentfulProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //Content Delivery API
    contentfulProvider.setOptions({
      space: 'dbkd6l6b6160',
      accessToken: '69268629511d314673b1f549d90c2049b610bc8ec986e087aa89724e7fe749cd'
    });
  }

})();

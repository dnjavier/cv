(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $location, $anchorScroll, contentful) {
    var vm = this;
    vm.profile;

    vm.items = [
    {
      img: 'assets/images/profile.png',
      gif: 'assets/images/profile.gif',
      title: 'Profile',
      state: 'profile'
    },
    {
      img: 'assets/images/resume.png',
      gif: 'assets/images/resume.gif',
      title: 'Resume',
      state: 'resume'
    },
    {
      img: 'assets/images/portfolio.png',
      gif: 'assets/images/portfolio.gif',
      title: 'Portfolio',
      state: 'portfolio'
    },
    {
      img: 'assets/images/blog.png',
      gif: 'assets/images/blog.gif',
      title: 'Blog',
      state: 'blog'
    },
    {
      img: 'assets/images/contact.png',
      gif: 'assets/images/contact.gif',
      title: 'Contact',
      state: 'contact'
    }
    ];

    var showImg;
    vm.changeImg = function (item) {
      showImg = item.img;
      item.img = item.gif;
    }

    vm.changeImgBack = function (item) {
      item.img = showImg;
    }

    vm.goToElement = function (element) {
      $location.hash(element);
      $anchorScroll();
    }

    vm.classAnimation = '';
    vm.creationDate = 1456341402465;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

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
          console.log('Oops, error ' + response.status);
          console.log(response);
        }
      );

  }
})();

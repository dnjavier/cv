(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController() {
    var vm = this;
    vm.entries = [{}];

    vm.item = {
      img: 'assets/images/blog.png',
      gif: 'assets/images/blog.gif',
      title: 'Blog',
      state: 'blog',
      desc: 'I write here my thoughts'
    };

    vm.entries[0].fields = {
      title: 'Project selected by people',
      intro: 'After the hackathon, we received an invitation to participate in a event where the public were going to choose a project.',
      info: '',
      imageURL: 'images/hackathon-premio.jpg'
    };

    vm.entries[1] = {};
    vm.entries[1].fields = {
      title: 'English in Chester',
      intro: 'An awesome experience learning english and sharing with people from all around the world.',
      info: '',
      imageURL: 'images/chester.jpg'
    };

    vm.entries[2] = {};
    vm.entries[2].fields = {
      title: 'TECHO - 2014',
      intro: 'It was the first time participing in an event to collect money.',
      info: '',
      imageURL: 'images/techo.jpg'
    };

    vm.entries[3] = {};
    vm.entries[3].fields = {
      title: 'GOES ceremony',
      intro: 'This was the speach given to those new guys at GOES.',
      info: '',
      imageURL: 'images/discurso-goes.jpg'
    };

    vm.entries[4] = {};
    vm.entries[4].fields = {
      title: 'ECOin - 2015',
      intro: 'We were helping to build the proposal that was sent to COP21 in Paris.',
      info: '',
      imageURL: 'images/eco-in.jpeg'
    };

  }
})();

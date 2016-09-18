(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('EntriesController', EntriesController);

  /** @ngInject */
  function EntriesController($log, $stateParams) {
    var vm = this;
    vm.entries = [{}];
    vm.entry = {};
    vm.idEntry = $stateParams.idEntry;

    vm.item = {
      img: 'assets/images/blog.png',
      gif: 'assets/images/blog.gif',
      title: 'Blog',
      state: 'blog',
      desc: 'This is my thought'
    };

    vm.entries[0].fields = {
      id: '0',
      title: 'Project selected by people',
      intro: 'After the hackathon, we received an invitation to participate in a event where the public were going to choose a project.',
      info: 'After the hackathon, we received an invitation to participate in a event where the public were going to choose a project.',
      imageURL: 'images/hackathon-premio.jpg'
    };

    vm.entries[1] = {};
    vm.entries[1].fields = {
      id: '1',
      title: 'English in Chester',
      intro: 'An awesome experience learning english and sharing with people from all around the world.',
      info: '',
      imageURL: 'images/chester.jpg'
    };

    vm.entries[2] = {};
    vm.entries[2].fields = {
      id: '2',
      title: 'TECHO - 2014',
      intro: 'It was the first time participing in an event to collect money.',
      info: '',
      imageURL: 'images/techo.jpg'
    };

    vm.entries[3] = {};
    vm.entries[3].fields = {
      id: '3',
      title: 'GOES ceremony',
      intro: 'This was the speach given to those new guys at GOES.',
      info: '',
      imageURL: 'images/discurso-goes.jpg'
    };

    vm.entries[4] = {};
    vm.entries[4].fields = {
      id: '4',
      title: 'ECOin - 2015',
      intro: 'We were helping to build the proposal that was sent to COP21 in Paris.',
      info: '',
      imageURL: 'images/eco-in.jpeg'
    };

    vm.entry = vm.entries[vm.idEntry].fields;

  }
})();

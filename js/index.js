(function(window, document, $, undefined) {
  'use strict';

  var filter = {
    all: 'all',
    android: 'android',
    ios: 'ios',
    web: 'web',
    backend: 'backend',
    misc: 'misc'
  };

  var data = {
    name: 'Jared Hall',
    tagline: 'Native App Developer',
    image: 'img/logo.svg',

    background: 'img/bg-beer.jpg',
    base: {
      url: 'mononz.com',
      year: 2018,
    },
    work: {
      title: 'About Me',
      ref: 'about',
      description: 'Here are some examples of my work.'
    },
    portfolio: {
      title: 'Portfolio',
      ref: 'portfolio',
      description: 'Here are some other projects that I\'ve worked on.',
      controls: [
        { title: 'All',     type: filter.all },
        { title: 'Android', type: '.' + filter.android },
        { title: 'iOS',     type: '.' + filter.ios },
        // { title: 'Backend', type: '.' + filter.backend },
        // { title: 'Web',     type: '.' + filter.web },
        // { title: 'Misc',    type: '.' + filter.misc }
      ],
      items: [
        {
          type: filter.android,
          image: 'img/portfolio/grid-1.jpg',
          title: 'Client Name',
          subtitle: 'Brand identity',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/grid-2.jpg',
          title: 'Client Name',
          subtitle: 'Web Development',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/grid-3.jpg',
          title: 'Client Name',
          subtitle: 'Web Development',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/grid-4.jpg',
          title: 'Client Name',
          subtitle: 'Brand identity',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/grid-5.jpg',
          title: 'Client Name',
          subtitle: 'Web Development',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/grid-6.jpg',
          title: 'Client Name',
          subtitle: 'Graphic Design',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/grid-7.jpg',
          title: 'Client Name',
          subtitle: 'Graphic Design',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/grid-8.jpg',
          title: 'Client Name',
          subtitle: 'Web Development',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/grid-9.jpg',
          title: 'Client Name',
          subtitle: 'Brand identity',
          caption: ''
        }
      ]
    },
    social: [
      {
        link: 'https://medium.com/@mononz',
        icon: 'fab fa-medium-m'
      },{
        link: 'https://twitter.com/mononzz',
        icon: 'fab fa-twitter'
      },{
        link: 'https://github.com/mononz',
        icon: 'fab fa-github'
      },{
        link: 'https://stackoverflow.com/users/6407116/mononz',
        icon: 'fab fa-stack-overflow'
      },{
        link: 'https://www.linkedin.com/in/mononzz',
        icon: 'fab fa-linkedin'
      },{
        link: 'mailto:jared@mononz.com',
        icon: 'fa fa-envelope'
      }
    ]
  };

  var source = $("#site-template").html();
  var template = Handlebars.compile(source);
  $('#site').html(template(data));

})(window, document, jQuery);
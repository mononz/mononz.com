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
          image: 'img/portfolio/tipple/tipple.png',
          title: 'Tipple',
          subtitle: 'TippleAU',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/personal/psarchives.png',
          title: 'PSArchives',
          subtitle: 'Personal Project',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/personal/paradex.png',
          title: 'Paradex',
          subtitle: 'Personal Project',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/personal/monote.png',
          title: 'Monote',
          subtitle: 'Personal Project',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/personal/lazytag.png',
          title: 'Lazy Tag',
          subtitle: 'Personal Project',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/personal/lastepisode.png',
          title: 'Last Episode',
          subtitle: 'Personal Project',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/personal/crypz.png',
          title: 'Crypz',
          subtitle: 'Personal Project',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/mononz/tepari.png',
          title: 'Te Pari',
          subtitle: 'Mononz Contracting',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/creativeintersection/worksafeguardian.png',
          title: 'WorkSafe Guardian',
          subtitle: 'Creative Intersection',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/creativeintersection/pocketkeez.png',
          title: 'PocketKeez',
          subtitle: 'Creative Intersection',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/creativeintersection/iseekplant.png',
          title: 'iSeekPlant',
          subtitle: 'Creative Intersection',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/creativeintersection/idfish.png',
          title: 'iDFish',
          subtitle: 'Creative Intersection',
          caption: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/creativeintersection/assesspal.png',
          title: 'AssessPal',
          subtitle: 'Creative Intersection',
          caption: ''
          // }, {
          //   type: filter.android,
          //   image: 'img/portfolio/more.png',
          //   title: 'More Work',
          //   subtitle: 'Apart of',
          //   caption: ''
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
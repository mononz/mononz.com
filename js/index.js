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
      year: new Date().getFullYear(),
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
          image: 'img/portfolio/tipple-customer.png',
          color: '#FFEB3B',
          title: 'Tipple Customer',
          subtitle: 'TippleAU',
          caption: '',
          link: 'https://play.google.com/store/apps/details?id=com.tipple'
        }, {
          type: filter.android,
          image: 'img/portfolio/tipple-courier.png',
          color: '#9E9E9E',
          title: 'Tipple Courier',
          subtitle: 'TippleAU',
          caption: 'https://play.google.com/store/apps/details?id=au.com.tipple.courier',
          link: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/tipple-courier.png',
          color: '#9E9E9E',
          title: 'Tipple Partner',
          subtitle: 'TippleAU',
          caption: 'https://play.google.com/store/apps/details?idcom.tipplego.partner',
          link: ''
        }, {
          type: filter.android,
          image: 'img/portfolio/planetside.png',
          color: '#E91E63',
          title: 'PSArchives',
          subtitle: 'Personal Project',
          caption: '',
          link: 'https://play.google.com/store/apps/details?id=net.mononz.ps2'
        }, {
          type: filter.android,
          image: 'img/portfolio/paragon.png',
          color: '#673AB7',
          title: 'Paradex',
          subtitle: 'Personal Project',
          caption: '',
          link: 'https://play.google.com/store/apps/details?id=net.mononz.paragon'
        }, {
          type: filter.android,
          image: 'img/portfolio/monote.png',
          color: '#607D8B',
          title: 'Monote',
          subtitle: 'Personal Project',
          caption: '',
          link: null
        }, {
          type: filter.android,
          image: 'img/portfolio/lazytag.png',
          color: '#CDDC39',
          title: 'Lazy Tag',
          subtitle: 'Personal Project',
          caption: '',
          link: null
        }, {
          type: filter.android,
          image: 'img/portfolio/lastepisode.png',
          color: '#F44336',
          title: 'Last Episode',
          subtitle: 'Personal Project',
          caption: '',
          link: null
        }, {
          type: filter.android,
          image: 'img/portfolio/crypz.png',
          color: '#2196F3',
          title: 'Crypz',
          subtitle: 'Personal Project',
          caption: '',
          link: null
        }, {
          type: filter.android,
          image: 'img/portfolio/tepari.png',
          color: '#4CAF50',
          title: 'Te Pari',
          subtitle: 'Mononz Contracting',
          caption: '',
          link: 'https://play.google.com/store/apps/details?id=com.tepari.tpcd'
        }, {
          type: filter.android,
          image: 'img/portfolio/wsg.png',
          color: '#3F51B5',
          title: 'WorkSafe Guardian',
          subtitle: 'Creative Intersection',
          caption: '',
          link: 'https://play.google.com/store/apps/details?id=au.com.worksafeguardian.androidapp'
        }, {
          type: filter.android,
          image: 'img/portfolio/pocketkeez.png',
          color: '#795548',
          title: 'PocketKeez',
          subtitle: 'Creative Intersection',
          caption: '',
          link: null
        }, {
          type: filter.android,
          image: 'img/portfolio/iseekplant.png',
          color: '#009688',
          title: 'iSeekPlant',
          subtitle: 'Creative Intersection',
          caption: '',
          link: 'https://play.google.com/store/apps/details?id=au.com.iseekplant.app'
        }, {
          type: filter.android,
          image: 'img/portfolio/idfish.png',
          color: '#FF5722',
          title: 'iDFish',
          subtitle: 'Creative Intersection',
          caption: '',
          link: 'https://play.google.com/store/apps/details?id=au.com.idfish.app'
        }, {
          type: filter.android,
          image: 'img/portfolio/assesspal.png',
          color: '#9E9E9E',
          title: 'AssessPal',
          subtitle: 'Creative Intersection',
          caption: '',
          link: 'https://assesspal.com/'
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
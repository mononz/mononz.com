var list = [
  {
    type: 'identity',
    image: 'img/portfolio/grid-1.jpg',
    title: 'Client Name',
    subtitle: 'Brand identity',
    caption: ''
  }, {
    type: 'web',
    image: 'img/portfolio/grid-2.jpg',
    title: 'Client Name',
    subtitle: 'Web Development',
    caption: ''
  }, {
    type: 'web',
    image: 'img/portfolio/grid-3.jpg',
    title: 'Client Name',
    subtitle: 'Web Development',
    caption: ''
  }, {
    type: 'identity',
    image: 'img/portfolio/grid-4.jpg',
    title: 'Client Name',
    subtitle: 'Brand identity',
    caption: ''
  }, {
    type: 'web',
    image: 'img/portfolio/grid-5.jpg',
    title: 'Client Name',
    subtitle: 'Web Development',
    caption: ''
  }, {
    type: 'graphic',
    image: 'img/portfolio/grid-6.jpg',
    title: 'Client Name',
    subtitle: 'Graphic Design',
    caption: ''
  }, {
    type: 'graphic',
    image: 'img/portfolio/grid-7.jpg',
    title: 'Client Name',
    subtitle: 'Graphic Design',
    caption: ''
  }, {
    type: 'web',
    image: 'img/portfolio/grid-8.jpg',
    title: 'Client Name',
    subtitle: 'Web Development',
    caption: ''
  }, {
    type: 'identity',
    image: 'img/portfolio/grid-9.jpg',
    title: 'Client Name',
    subtitle: 'Brand identity',
    caption: ''
  }
];

var div = document.getElementById('portfolioList');

var out = [];
list.forEach(function (item) {
  out.push('        <div class="mix ' + item.type + '" href="' + item.image + '" title="' + item.title + '">');
  out.push('            <div class="portfolio-wrapper">');
  out.push('                <img src="' + item.image + '" alt="">');
  out.push('                <div class="caption">');
  out.push('                    <div class="caption-text">');
  out.push('                        <a class="text-title">' + item.title + '</a>');
  out.push('                        <span class="text-category">' + item.subtitle + '</span>');
  out.push('                    </div>');
  out.push('                    <div class="caption-bg"></div>');
  out.push('                </div>');
  out.push('            </div>');
  out.push('        </div>');
  out.push('\n');
});
div.innerHTML += out.join('\n');
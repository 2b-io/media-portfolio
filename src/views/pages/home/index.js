import template from './view.hbs'

const labels = {
  header: {
    text: 'we speed up your site </br>across the globe',
    link_title: 'learn more'
  },
  feature: {
    totally_optimized: {
      title: 'TOTALLY OPTIMIZED',
      text: 'A highly optimized TCP stack and 100% SSD coverage are just some of the factors that make our platform faster than order.',
      footer_text: 'View Benefits',
    },
    powerful_features: {
      title: 'POWERFUL FEATURES',
      text: 'HTTP/2, origin shield, RESTFUL API, real-time stats and many more awesome features crafted with love for you.',
      footer_text: 'View Features',
    },
    global_network: {
      title: 'GLOBAL NETWORK',
      text: 'Built on IP Any cast and on our latency based routing technology for best performance. Developed for lightning speed.',
      footer_text: 'View Network',
    },
    totally_saved: {
      title: 'TOTALLY SAVED',
      text: 'Media Network CDN\'s WAF, DDoS protection, and SSL defend website owners and their visitors from all types of online threats.',
      footer_text: 'View more',
    },
  },
  maps: {
    label: 'Speed up your <b>game, softwave delivery, advertisements, CMS, websites</b> and many more.',
    data: {
      value: '50',
      text: 'Data centers'
    },
    ratio: {
      value: '&gt;94%',
      text: 'HIT ratio (avg)'
    },
    cost: {
      value: '$50',
      text: 'or less per TB'
    },
    zones: {
      value: '50,454',
      text: 'Deployed zones'
    },
  },
  what_new: {
    title: 'what\'s new in our system?',
    image_optimization: 'image-optimization',
    image_size: 'properly size images',
    image_animated: 'animated gifs to html5 videos',
  }
}

const urls = {
}

const assets = {
  logo_white: require('img/logo/logo_white.png'),
  feature_icon: {
    icon1: require('img/icon/icon1.png'),
    icon2: require('img/icon/icon2.png'),
    icon3: require('img/icon/icon3.png'),
    icon4: require('img/icon/icon4.png'),
  },
  system_icon: {
    image_optimization: require('img/icon/icon5.png'),
    image_size: require('img/icon/icon6.png'),
    image_animated: require('img/icon/icon7.png'),
  },
  trusted: {
    logo1: require('img/logo/logo2.jpg'),
    logo2: require('img/logo/logo5.jpg'),
    logo3: require('img/logo/logo9.jpg'),
    logo4: require('img/logo/logo12.jpg'),
  },
  footer_icon: {
    facebook: require('img/icon/facebook.png'),
    twitter: require('img/icon/twitter.png'),
    skype: require('img/icon/skype.png'),
    youtube: require('img/icon/youtube.png'),
  },
}

const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


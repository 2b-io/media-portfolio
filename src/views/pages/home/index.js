import headerData from '../../layouts/header'

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
    title: [
      {
        value: '50',
        text: 'Data centers'
      },
      {
        value: '&gt;94%',
        text: 'HIT ratio (avg)'
      },
      {
        value: '$50',
        text: 'or less per TB'
      },
      {
        value: '50,454',
        text: 'Deployed zones'
      },
    ]
  },
  what_new: {
    title: 'what\'s new in our system?',
    image_optimization: 'image-optimization',
    image_size: 'properly size images',
    image_animated: 'animated gifs to html5 videos',
  },
  subscribe: {
    title: 'Subscribe Now',
  }
}

const urls = {
  menu: headerData.menu,
  social: [
    {
      link: 'facebook',
      icon: require('img/icon/facebook.svg'),
    },
    {
      link: '#',
      icon: require('img/icon/twitter.svg'),
    },
    {
      link: '#',
      icon: require('img/icon/skype.svg'),
    },
    {
      link: '#',
      icon: require('img/icon/youtube.svg'),
    },
  ],
}

const assets = {
  logo_white: require('img/logo/logo_white.svg'),
  feature_icon: {
    totally_optimized: require('img/icon/totally_optimized.svg'),
    powerful_features: require('img/icon/powerful_features.svg'),
    global_network: require('img/icon/global_network.svg'),
    totally_saved: require('img/icon/totally_saved.svg'),
  },
  system_icon: {
    image_optimization: require('img/icon/image_optimization.svg'),
    image_size: require('img/icon/image_size.svg'),
    image_animated: require('img/icon/image_animated.svg'),
  },
  trusted: {
    title: 'Trusted By',
    logo: [
      require('img/logo/nasdaq.jpg'),
      require('img/logo/logmeln.jpg'),
      require('img/logo/discord.jpg'),
      require('img/logo/cisco.jpg'),
    ]
  },
}

const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


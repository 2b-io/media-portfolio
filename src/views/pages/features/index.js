import headerData from '../../layouts/header'

import template from './view.hbs'

const labels = {
  body_text: {
    title: 'content delivery simplified',
    label: 'Supercharge your website to provide an exceptional user experience.',
  },
  footer_text: headerData.footer_text,
  company_info: headerData.company_info,
  contact: {
    label: {
      form_text: 'Get In Touch',
      map_text: 'Address'
    },
    placeholder_text: {
      title: 'Title',
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
    }
  },
  subscribe: headerData.subscribe,
  feature: [
    {
      img: require('img/icon/featureicon1.svg'),
      label: 'full control',
      detail: 'Easy pay-as-you-go pricing with full control over your assets using our powerful management dashboard and RESTful API.'
    },
    {
      img: require('img/icon/featureicon2.svg'),
      label: 'high performance',
      detail: 'Crafted with a focus on high performance, customized TCP stack, and highly optimized IP Anycast and geolocation routing.'
    },
    {
      img: require('img/icon/featureicon3.svg'),
      label: 'reliable & secure',
      detail: 'Requests are routed to the nearest available POP, while providing industry-leading encryption standards and two-factor auth.'
    },
  ],
  advanced_features: {
    title: 'advanced features',
    detail: 'Everything you need for efficient content delivery.',
    content: 'Boot your content with a Pull or Push Zone and deliver your assets super-fast on any device. Our edge servers &quot;pull&quot; the static, content form your server with a Pull Zone in order to cache it and serve it accelerated from our edge servers. A Push Zone is the right choice for you if you prefer to upload your assets to KeyCDN. The Zone configurations are globally applied within minutes.',
    features: [
      {
        label: 'General Features',
        item: [
          'HTTP/2',
          'HPACK compression (Huffman Encoding)',
          'GZip compression',
          'Use your CNAMEs',
          'Force downloads',
          'Custom expire headers',
          'Live tail on your logs',
          'Raw log forwarding in real time',
          'Custom rules',
          'Byte-range requests for HTTP streaming',
          'HLS and HTTP streaming support',
        ]
      },
      {
        label: 'Security features',
        item: [
          'Hotlink protection (restriction of HTTP referrer)',
          'Secure Token (secured URL)',
          'Shared SSL (TLS)',
          'Custom SSL (TLS)',
          'Let&#39;s Encrypt SSL (TLS)',
          'OCSP stapling',
          'Block bad bots',
          'DDoS protection',
        ]
      },
      {
        label: 'Security features',
        item: [
          'Instantly purge zone caches or single URLs',
          'Origin shield',
          'Overrider origin cache-control header',
          'Overrider origin expore headers',
          'Strip cookies',
          'Enable canonical headers',
          'Custom request HTTP header field (X-Pull)',
          'Custom robots.txt',
          'Cache Brotli compressed assets',
          'Cache query strings',
        ]
      },
      {
        label: 'Push features',
        item: [
          'upload content to your FTP account',
          'FTP subusers',
          'Synchronize content with rsync',
          'Enabled directory listing',
          'Enabled directory index',
          'optimized for large files',
        ]
      },
    ]
  },
  learn_more: {
    label: 'Learn more in our',
    link_label: 'Knowledge Base'
  },
}

const urls = {
  menu: headerData.menu,
  social: headerData.social
}

const assets = {
  header_logo: {
    src: require('img/logo/logo_blue.svg'),
    alt: 'NTQ Solution',
  },
  footer_logo: {
    src: require('img/logo/logo_white.svg'),
    alt: 'NTQ Solution',
  },
  collaborator: {
    title: 'integration tutorials',
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


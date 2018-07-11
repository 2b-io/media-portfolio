import headerData from '../../layouts/header'

import template from './view.hbs'

const labels = {
  body_text: {
    title: 'Knowledge Base',
    label1: 'Questions? Check our',
    faq: 'FAQ',
    label2: 'and',
    knowledge_base: 'Knowledge Base'
  },
  footer_text: headerData.footer_text,
  company_info: headerData.company_info,
  feature: {
    home_text: 'Home',
    page_title: {
      getting_started: 'Getting Started',
      developer_guide: 'Developer Guide',
      faq: 'FAQ',
    }
  }
}

const urls = {
  menu: headerData.menu,
  social: headerData.social,
  feature: [
    {
      img: require('img/icon/gettingstart.svg'),
      alt: 'getting-start',
      link: '/knowledge-base/getting-started',
      label: 'getting started',
      detail: 'Setting up KeyCDN with your site is quick and easy. Learn more about how to accelerate your web content.'
    },
    {
      img: require('img/icon/developeguide.svg'),
      alt: 'developer-guide',
      link: '/knowledge-base/developer-guide',
      label: 'developer guide',
      detail: 'Didn\'t find the answer in our knowledge base? Open a developer guide to get assistance.'
    },
    {
      img: require('img/icon/FAQ.svg'),
      alt: 'FAQ',
      link: '/knowledge-base/faq',
      label: 'FAQ',
      detail: 'Check these common questions to get a better technical understanding of a CDN.'
    },
  ],
  ghostIP: 'http://18.210.159.133/public/ghost-sdk.min.js',
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
}


export const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


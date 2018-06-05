import headerData from '../../layouts/header'

import template from './view.hbs'

const labels = {
  body_text: {
    title: 'contact us',
    label1: 'Questions? Check our',
    faq: 'FAQ',
    label2: 'and',
    knowledge_base: 'Knowledge Base'
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
  }
}

const urls = {
  menu: headerData.menu,
  social: headerData.social
}

const assets = {
  header_logo: require('img/logo/logo_blue.svg'),
  footer_logo: require('img/logo/logo_white.svg'),
}

const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


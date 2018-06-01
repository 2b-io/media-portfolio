import headerData from '../../layouts/header'

import template from './view.hbs'

const labels = {
}

const urls = {
  menu: headerData.menu,
  social: headerData.social
}

const assets = {
  header_logo: require('img/logo/logo_blue.svg'),
  footer_logo: require('img/logo/logo_white.svg'),
  contact_img: require('img/bg/contact.jpg'),
}

const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


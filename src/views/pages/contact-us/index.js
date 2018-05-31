import headerData from '../../layouts/header'

import template from './view.hbs'

const labels = {
}

const urls = {
  menu: headerData.menu,
}

const assets = {
  logo_white: require('img/logo/logo_white.svg'),
}

const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


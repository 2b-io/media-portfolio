import template from './view.hbs'

const labels = {
}

const urls = {
}

const assets = {
  logo: require('img/logo/logo.svg')
}

const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


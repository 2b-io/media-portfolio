import template from './view.hbs'

const labels = {
}

const urls = {
}

const assets = {
  logo_img: require('img/logo/logo_ntq.svg')
}

const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


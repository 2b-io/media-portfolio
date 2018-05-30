import template from './view.hbs'

const labels = {
  people: [
    {
      link: 'google',
      label: 'google',
    },
    {
      link: 'facebook',
      label: 'facebook',
    }
  ]
}

const urls = {
}

const assets = {
  logo_img: require('img/logo/logo.svg')
}

const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


import headerData from '../../layouts/header'

import template from './view.hbs'

const labels = {
  body_text: {
    title: 'about us',
    label: 'Supercharge your website to provide an exceptional user expericence.',
  },
  footer_text: headerData.footer_text,
  company_info: headerData.company_info,
  about:
  {
    about_us: {
      label: 'About Us',
      text: 'A division of the NTQ Solution, Media Network CDN is a team of 15 IT and creative professionals who are committed to providing the best Content Delivery Network (CDN) hosting solutions to enhance the performance of businesses. From startups to huge enterprises, we have a diverse customer base. Our past experience in the industry combined with working with different clients has provided us an edge over our competitors-we have learnt the art of creating solutions for breakthrough business success.',
    },
    what_we_do: {
      label: 'What We Do...',
      text: 'We provide our customers with the most comprehensive, tailored and affordable CDN solutions and custom Multi CDN Services. We also provide website and server monitoring. <br/><br/> We pride ourselves in bringing the most reliable solutions and services to our consumers. With our values of integrity and honesty, we combine our creative skills, technical expertise and depth of knowledge into providing and solution that can remain profitable for a client today and tomorrow.',
    },

  }
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
  body_img: {
    src: require('img/bg/why_choose_us.jpg'),
    alt: 'why-choose-us'
  },

}


const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


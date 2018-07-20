import headerData from '../../layouts/header'

import template from './view.hbs'

const labels = {
  body_text: {
    title: 'contact us',
    label1: 'Questions? Check our',
    faq: 'FAQ',
    label2: 'and',
  },
  footer_text: headerData.footer_text,
  company_info: headerData.company_info,
  contact: {
    label: {
      form_text: 'Get In Touch',
      map_text: 'Address'
    },

  }
}

const urls = {
  menu: headerData.menu,
  social: headerData.social,
  form_contact: {
    action: 'https://medianetwork.us18.list-manage.com/subscribe/post',
    method: 'POST',
    input_u_value: 'fe6b6383f2b1cc961b4c0d4f1',
    input_id_value: 'fd8826e069',
    element: {
      title: {
        placeholder_text: 'Title',
        name: 'MERGE1'
      },
      name: {
        placeholder_text: 'Name',
        name: 'MERGE2'
      },
      email: {
        placeholder_text: 'Email',
        name: 'MERGE0'
      },
      company: {
        placeholder_text: 'Company',
        name: 'MERGE4'
      },
      message: {
        placeholder_text: 'Message',
        name: 'MERGE5'
      },
    }
  },
  knowledge_base: {
    link: '/knowledge-base',
    title: 'Knowledge Base'
  }
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
  api_key: 'AIzaSyC9Iu3GW3c7i_2a0LKdGVXaAIJ3Kl_FG-0'
}


const context = {
  labels: labels,
  urls: urls,
  assets: assets
}

export default template(context)


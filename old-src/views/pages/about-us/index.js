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
    what_you_get: {
      header_text: 'What you get with us',
      content_text: [
        {
          label: 'Affordability: We Provide the Most Competitive CDN Hosting solutions',
          title: 'Our solutions are the cheapest because we do not provide a single CDN solution. Depending on the client\'s needs, budget and business goals, we provide a custom solution so that our customers pay only for what they need. No more, no less.',
        },
        {
          label: 'Durability: We Deliver Tailored and Qualitative CDN Solutions',
          title: 'Our solutions are the cheapest because we donot provide a single CDN solution. Depending on the client\'s needs, budget and business goals, we provide a custom solution so that our customers pay only for what they need. No more, no less.',
        },
        {
          label: 'Durability: We Deliver Tailored and Qualitative CDN Solutions',
          title: 'Being a CDN solution provider focused on improving the client\'s business performance, we plan our services in such a way that they receive a comfort level that is unquestionable superior than the ones provided by our competitor. We keepa constant stream of communication with our clients and keep them updated about performance and changes.',
        },
        {
          label: 'Flexibility: We Ensure Our Solutions are Applicable for all CMS Plaforms',
          title: 'Whether your website is built on a CMS platform like Wordpress or Joomla, or by using javascript, PHP or HTML, our CDN solutions can cater all types. You can rest assured that you will receive the best solutions that can both improve and sustain your website speedm and increase performance and engagement in the long run.',
        },
        {
          label: 'Scalabitity: We Cater to the CDN Service Needs of All Business Levels',
          title: 'With the advancement of the digital world, the borders and distances between businesses and clients separated by countries have eliminated. Our experts have explored and exploited digital opportunities, and this has helped',
        },
      ]

    },
    why_choose_us: {
      header_text: 'Why choose us',
      content_text: [
        {
          label: 'Tried, Tested, and Trusted by Some of the Biggest Brands',
          title: 'Several of the big brands and numerous small and medium sized corporations have put their trust in us, and they have not been disappointed. We empower our clients by educating them about the technology that we use and provide them peace of mind by ensuring the fastest CDN services in the country.',
        },
        {
          label: 'Seamless CDN across the Coninents',
          title: 'it doesn\'t matter where you are or where you clients are anymore. With our CDN services, your business can always be backed by a services, your business can alway be backed by service that fast, efficient, and not bound by borders.',
        },
      ]
    },
  },
  about_left:{
    vision: {
      label: 'Our Vision',
      title: 'Todeliver a service that is par excellence, to maintain transparency with our clients, and be ethical in our work processes.',
    },
    mission: {
      label: 'Our Mission',
      title: 'To deliver the fastest CDN solution services at all times, on time, every time.',
    }
  }

}

const urls = {
  menu: headerData.menu,
  social: headerData.social,
  contact:{
    label:'15 days',
    title:'free trial',
    url:'/contact-us',
    button_label:'contact now'
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


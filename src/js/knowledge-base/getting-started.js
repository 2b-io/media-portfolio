import 'stylus/knowledge-base/getting-started.styl'

import $ from 'jquery'

import postTemplate from '../../views/pages/knowledge-base/body-content.hbs'

ghost.init({
  clientId: "ghost-frontend",
  clientSecret: "0a2a68264135"
})

function onSuccess(data) {

  var $bodyWrapper = $('#knowledge-base-body-wrapper')

  data.urls = [
    {
      link: '/knowledge-base/getting-started',
      title: 'Getting started',
    },
    {
      link: '/knowledge-base/developer-guide',
      title: 'Developer Guide',
    },
    {
      link: '#',
      title: 'FAQ',
    },
  ]

  $bodyWrapper.append(postTemplate({data}))
}


$(document).ready(function () {

    // Fetch the 20 most recently published posts
  $.get(ghost.url.api('posts',
    {filter: 'primary_tag.name: [getting-started]',
    limit: 1, include: 'tags'}
    )).done(onSuccess).fail(function (err){
    console.log(err);
  });

  // Fetch all tags
/*  $.get(ghost.url.api('tags', {limit: "all"})).done(onSuccess).fail(function (err){
    console.log(err);
  });*/
})

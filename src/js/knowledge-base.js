import 'stylus/knowledge-base.styl'

import $ from 'jquery'

import ghostConfig from '../../../internals/config.ghost.js'

import postTemplate from '../views/pages/knowledge-base/base-search-result.hbs'

ghost.init(ghostConfig.ghostInit)


function onSuccess(data) {
  var $result = $('#knowledge-search-wrapper')
  $.each(data.posts, function (i, post) {
    $result.append(postTemplate({post}))
  })
}


$(document).ready(function () {
  $.get(ghost.url.api('posts', {page: 1, limit: 3})).done(onSuccess).fail(function (err){
  console.log(err)
  })
})

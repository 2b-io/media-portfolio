import 'stylus/knowledge-base/getting-started.styl'

import $ from 'jquery'

import ghostConfig from '../../../internals/config.ghost.js'

import postTemplate from '../../views/pages/knowledge-base/body-content.hbs'

ghost.init(ghostConfig.ghostInit)

function onSuccess(data) {

  var $bodyWrapper = $('#knowledge-base-body-wrapper')

  $.each(data.posts, function (i, post) {
    post.tagId = post.primary_tag.id
  })

  $.each(data.tags, function (i, tag) {
    tag.postID = []
    $.each(data.posts, function (i, post) {
      if (post.tagId==tag.id) {
        var postDetail = {}
        postDetail.id = post.id
        postDetail.title = post.title
        tag.postID.push(postDetail)
      }
    })
  })

  $bodyWrapper.append(postTemplate({data}))
}

$(document).ready(function () {
    // Fetch posts
  $.get(ghost.url.api('posts', {filter: 'primary_tag.slug:[getting-started]', limit: "all", include: 'tags'})).done(function (postList) {
    // Fetch all list
    $.get(ghost.url.api('tags', {filter: 'slug:[getting-started]',limit: 1, include: 'count.posts'})).done(
      function (data) {
        data.posts = postList.posts
        onSuccess(data)
      }
    ).fail(
    function (err){
      console.log(err);
    });
  }).fail(
      function (err){
        console.log(err);
      });

})


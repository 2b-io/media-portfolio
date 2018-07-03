import 'stylus/knowledge-base.styl'

import $ from 'jquery'

import postTemplate from '../views/pages/knowledge-base/base-search-result.hbs'

ghost.init({
  clientId: "ghost-frontend",
  clientSecret: "0a2a68264135"
});


function onSuccess(data) {
  var $result = $('#knowledge-search-wrapper');
  $.each(data.posts, function (i, post) {
    $result.append(
      postTemplate({post})
    );
  });
}


$(document).ready(function () {
  $.get(ghost.url.api('posts', {page: 1, limit: 3})).done(onSuccess).fail(function (err){
  console.log(err);
  });
});

import 'stylus/knowledge-base/getting-started.styl'

import $ from 'jquery'

ghost.init({
  clientId: "ghost-frontend",
  clientSecret: "0a2a68264135"
})

function onSuccess(data) {
  var $bodyRight = $('#knowledge-base-body-wrapper-content-right-ul');
  var $bodyLeft = $('#knowledge-base-body-wrapper-content-left');
  var loc = window.location;
  var pathName = loc.pathname.substring(loc.pathname.lastIndexOf('/')+1)
  var pathDir = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1)
  $.each(data.tags, function (i, tag) {
    console.log(pathName)
    if (!pathName.localeCompare(tag.slug)) {
      $bodyRight.append(
        '<li class=\"current-directory\" id=\"knowledge-base-body-wrapper-content-right-li\" >'+ tag.name + '</li>'
      )
    }
    else {
      $bodyRight.append(
        '<li id=\"knowledge-base-body-wrapper-content-right-li\">'+ '<a href=\"' +pathDir + tag.slug +'\">' + tag.name + '</a>'+'</li>'
      )
    }
  })
  $.each(data.posts, function (i, post) {
    $bodyLeft.append(post.html)
  })

}


$(document).ready(function () {

    // Fetch the 20 most recently published posts
  $.get(ghost.url.api('posts', {limit: 1})).done(onSuccess).fail(function (err){
    console.log(err);
  });

  // Fetch all tags
  $.get(ghost.url.api('tags', {limit: "all"})).done(onSuccess).fail(function (err){
    console.log(err);
  });
})

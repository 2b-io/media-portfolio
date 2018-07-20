import $ from 'jquery'
var dateformat = require("dateformat")

import ghostConfig from '../../../local-config/config.ghost.js'
import postTemplate from '../../views/pages/knowledge-base/body-content.hbs'

ghost.init(ghostConfig.ghostInit)


const formatDate = (dateString) => {
  var date = new Date(dateString)
  return dateformat(date, 'ddd, mmmm dS, yyyy')
}

const buildPostData = (posts) => {
  return posts.map(
    post => ({
      ...post,
      updateAt: formatDate(post.updated_at)
    })
  )
}

const buildTagData = ({ posts, tags }) => {
  return tags.map(
    tag => ({
      ...tag,
      postIDs: posts.map(
        post => post.primary_tag.id !== tag.id ?
          null : {
          slug: post.slug,
          title: post.title
        }
      ).filter(Boolean)
    })
  )
}

export const displayContentFromGhost = (getPostUrl, getTagUrl) => {
  // get data
  Promise.all([
    $.get(getPostUrl),
    $.get(getTagUrl)
  ]).then(([ { posts }, { tags }]) => {
    // build data
    return [
      buildPostData(posts),
      buildTagData({ posts, tags })
    ]
  }).then(([ posts, tags ]) => {
    // display
    $('#loading-wrapper').toggle()
    $('#knowledge-base-body-wrapper').append(postTemplate({
      data: { posts, tags }
    }))
  }).catch(err => {
    // handle error
    console.log(err)
  })
}

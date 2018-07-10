import $ from 'jquery'

import ghostConfig from '../../../local-config/config.ghost.js'
import postTemplate from '../../views/pages/knowledge-base/body-content.hbs'

ghost.init(ghostConfig.ghostInit)

const buildTagData = ({ posts, tags }) => {
  return tags.map(
    tag => ({
      ...tag,
      postID: posts.map(
        post => post.primary_tag.id !== tag.id ?
          null : {
          // id: post.id,
          id: post.id,
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
      posts,
      buildTagData({ posts, tags })
    ]
  }).then(([ posts, tags ]) => {
    // display
    $('#knowledge-base-body-wrapper').append(postTemplate({
      data: { posts, tags }
    }))
  }).catch(err => {
    // handle error
    console.log(err)
  })
}

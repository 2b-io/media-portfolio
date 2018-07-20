import $ from 'jquery'

import 'stylus/knowledge-base/getting-started.styl'
import { displayContentFromGhost } from './fetch-ghost-data.js'


$(document).ready(function () {
  const getPostUrl = ghost.url.api('posts', {
    filter: 'primary_tag.slug:[getting-started]',
    limit: 'all',
    order: 'updated_at desc',
    include: 'tags'
  })

  const getTagUrl = ghost.url.api('tags', {
    filter: 'slug:[getting-started]',
    limit: 1,
    include: 'count.posts'
  })

  displayContentFromGhost(getPostUrl, getTagUrl)

})

import $ from 'jquery'

import 'stylus/knowledge-base/getting-started.styl'
import { displayContentFromGhost } from './fetch-ghost-data.js'


$(document).ready(function () {
  const getPostUrl = ghost.url.api('posts', {
    filter: 'primary_tag.slug:[faq]',
    limit: 'all',
    order: 'updated_at asc',
    include: 'tags'
  })

  const getTagUrl = ghost.url.api('tags', {
    filter: 'slug:[faq]',
    limit: 1,
    include: 'count.posts'
  })

  displayContentFromGhost(getPostUrl, getTagUrl)
})

import cheerio from 'cheerio'
import fetch from 'node-fetch'
import querystring from 'querystring'
import truncatise from 'truncatise'

import config from '../infrastructure/config'

const normalize = (post) => {
  return {
    _raw: post,
    title: post.title,
    excerpt: post.custom_excerpt,
    slug: post.slug,
    tags: post.tags,
    authors: post.authors,
    publishedAt: Date.parse(post.published_at)
  }
}

const generateUrl = (path, params) => {
  return [
    `${ config.ghost.url }${ path }`,
    querystring.stringify({
      client_id: config.ghost.clientId,
      client_secret: config.ghost.clientSecret,
      ...params
    })
  ].filter(Boolean).join('?')
}

const transformImages = (post) => {
  const dom = cheerio.load(post._raw.html)

  dom('img').each(function() {
    const img = dom(this)
    const src = img.attr('src')

    img.attr(
      'src',
      (src && src.indexOf('/') === 0) ?
        `${ config.cdnServer }${ src }` :
        src
    )
  })

  const featureImage = (post._raw.feature_image && post._raw.feature_image.indexOf('/') === 0) ?
        `${ config.cdn.url }${ post._raw.feature_image }` :
        post._raw.feature_image

  return {
    ...post,
    html: dom.html(),
    featureImage: featureImage
  }
}

const truncateHtml = (post) => {
  return {
    ...post,
    truncatedHtml: truncatise(post._raw.html, {
      StripHTML: true,
      TruncateBy: 'words',
      TruncateLength: 30,
      Suffix: '...'
    })
  }
}

export default {
  async listPosts(page = 1) {
    const url = generateUrl('/posts', {
      limit: 20,
      page: Number(page),
      include: 'authors,tags'
    })

    const response = await fetch(url)

    if (!(200 <= response.status && response.status <= 299)) {
      throw response.statusText
    }

    const { posts, meta } = await response.json()

    return {
      posts: posts.map(normalize).map(transformImages).map(truncateHtml),
      meta
    }
  },
  async getPost(slug) {
    const url = generateUrl('/posts', {
      filter: `slug:${ slug }`,
      include: 'authors,tags'
    })

    const response = await fetch(url)

    if (!(200 <= response.status && response.status <= 299)) {
      throw response.statusText
    }

    const { posts } = await response.json()

    return {
      post: posts.map(normalize).map(transformImages).map(truncateHtml).shift()
    }
  }
}

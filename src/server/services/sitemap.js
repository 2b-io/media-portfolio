import ms from 'ms'
import sitemap from 'sitemap'

import ghost from './ghost'

export default {
  async generate(hostname) {
    const def = sitemap.createSitemap({
      hostname,
      cacheTime: ms('600s')
    })

    // add static pages
    def.add({ url: '/' })
    def.add({ url: '/posts' })

    // add tags
    const { tags } = await ghost.listTags()

    tags.forEach(
      (tag) => def.add({ url: `/tags/${ tag.slug }` })
    )

    // add posts
    const { posts } = await ghost.listPosts()

    posts.forEach(
      (post) => def.add({ url: `/${ post.slug }` })
    )

    return {
      xml: def.toString()
    }
  }
}

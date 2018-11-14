import formatDate from 'dateformat'
import randomColor from 'randomcolor'
import serializeError from 'serialize-error'

import config from '../infrastructure/config'
import ghost from '../services/ghost'
import sitemap from '../services/sitemap'

const safe = (middleware) => async (req, res, next) => {
  try {
    await middleware(req, res, next)
  } catch (e) {
    next(e)
  }
}

export default (app) => {
  app.use((req, res, next) => {
    res.locals.hostname = `${ req.protocol }://${ req.get('host') }`
    res.locals.URL = `${ res.locals.hostname }${ req.originalUrl }`

    next()
  })

  app.get('/sitemap.xml', safe(
    async (req, res, next) => {
      const { xml } = await sitemap.generate(res.locals.hostname)

      res.header('Content-Type', 'application/xml')
      res.send(xml)
    }
  ))

  app.get('/posts/:page([0-9]+)?', safe(
    async (req, res, next) => {
      const { page } = req.params

      if (1 === Number(page)) {
        return res.status(301).redirect('/posts')
      }

      const {
        posts,
        meta: { pagination }
      } = await ghost.listPosts(page)

      if (pagination.page > pagination.pages) {
        return res.redirect('/posts')
      }

      res.render('posts', {
        posts,
        pagination,
        formatDate
      })
    })
  )

  app.get('/tags/:slug/:page([0-9]+)?', safe(
    async (req, res, next) => {
      const { page, slug } = req.params

      if (1 === Number(page)) {
        return res.status(301).redirect(`/tags/${ slug }`)
      }

      const { tag } = await ghost.getTag(slug)

      const {
        posts,
        meta: { pagination }
      } = await ghost.listPosts(page, slug)

      if (pagination.page > pagination.pages) {
        return res.redirect(`/tags/${ slug }`)
      }

      res.render('posts', {
        posts,
        tag,
        pagination,
        formatDate
      })
    })
  )

  app.get('/:slug([a-z\-0-9]+)', safe(
    async (req, res, next) => {
      const { slug } = req.params
      const { post } = await ghost.getPost(slug)

      res.render('post', {
        post,
        formatDate,
        color: randomColor()
      })
    })
  )

  app.get('/', (req, res, next) => {
    res.render('home')
  })

  app.use((req, res, next) => {
    // TODO show 404 page
    res.redirect('/')
  })

  app.use((error, req, res, next) => {
    console.error(error)

    if (config.config) {
      res.json({
        error: serializeError(error)
      })
    } else {
      // TODO show 500 page
      res.redirect('/')
    }
  })
}

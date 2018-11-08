import ghost from '../services/ghost'

export default (app) => {
  app.get('/', (req, res, next) => {
    res.render('home')
  })

  app.get('/posts/:page?', async (req, res, next) => {
    const { page } = req.params
    const data = await ghost.listPosts(page)

    res.render('posts', data)
  })

  app.get('/p/:slug', async (req, res, next) => {
    const { slug } = req.params
    const data = await ghost.getPost(slug)

    res.render('post', data)
  })
}

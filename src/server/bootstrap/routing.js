export default (app) => {
  app.get('/', (req, res, next) => {
    res.render('home')
  })
}

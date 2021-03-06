const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const users = ['Diego', 'Robson', 'Caxandre', 'Caxa']

app.get('/', (req, res) => {
  return res.render('form', { users })
})

app.get('/form', (req, res) => {
  return res.render('new')
})

app.post('/check', (req, res) => {
  let age = req.body.age

  if (age >= 18) {
    return res.render('major', { age })
  } else {
    return res.render('minor', { age })
  }
})

app.listen(3000)

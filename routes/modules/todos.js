const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo

// Create
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const UserId = req.user.id
  const name = req.body.name

  return Todo.create({ name, UserId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Read
router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ 
    where: { UserId, id }
  })
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

//Update
router.get('/:id/edit', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  
  return Todo.findOne({ where: { UserId, id } })
    .then(todo => res.render('edit', { todo: todo.get() } ))
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  const { name, isDone } = req.body
  console.log(req.body)

  return Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      return todo.save()
    })
    .then(() => res.redirect(`/`))
    .catch(err => console.log(err))
})

module.exports = router
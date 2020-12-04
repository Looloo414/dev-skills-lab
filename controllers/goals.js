const Goal = require('../models/goal')

module.exports = {
  index,
  show,
  new: newGoal,
  create,
  delete: deleteGoal,
  edit,
  update
}

function index(req, res) {
  console.log(req.time)
  res.render('goals/index', {goals: Goal.getAll(), time: req.time})
}

function show(req, res) {
  res.render('goals/show', {goal: Goal.getOne(req.params.id)})
}

function newGoal(req, res) {
  res.render('goals/new')
}

function create(req, res) {
  Goal.create(req.body)
  res.redirect('/goals')
}

function deleteGoal(req, res) {
  Goal.deleteOne(req.params.id)
  res.redirect('/goals')
}

function edit(req, res) {
  res.render('goals/edit', {goal: Goal.getOne(req.params.id)})
}

function update(req, res) {
  Goal.update(req.params.id, req.body)
  res.redirect(`/goals/${req.params.id}`)
}
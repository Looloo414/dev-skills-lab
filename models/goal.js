const goals = [
    {id: 125223, goal: 'Graduate College', done: true},
    {id: 127904, goal: 'Finish Flight Training', done: false},
    {id: 139608, goal: 'Finish SEI Bootcamp', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function getOne(id) {
   return goals.find(goal => goal.id === parseInt(id))
  }
  
  function getAll() {
    return goals;
  }
  
  function create(goal) {
    goal.id = Date.now()*1000000
    goal.done = false
    goals.push(goal)
  }
  
  function deleteOne(id) {
    const idx = goals.findIndex(goal => goal.id === parseInt(id))
    goals.splice(idx, 1)
  }
  
  function update(id, newGoal){
    const idx = goals.findIndex(goal => goal.id === parseInt(id))
    goals[idx].goal = newGoal.goal
    goals[idx].done = newGoal.done === 'on' ? true : false
  }
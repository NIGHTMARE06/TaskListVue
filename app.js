let app = new Vue({
  el: '#app',
  data: {
    title: 'Vue Task List',
    tasks: [
      {done: false, text: 'Go to supermarket'},
      {done: true, text: 'Buy a car'},
      {done: false, text: 'Buy foo'}
    ],
    newTask: ''
  },
  methods: {
    deleteTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    },
    addTask() {
      this.tasks.push({
        done: false,
        text: this.newTask,
      })
      this.newTask = ''
    }
  }
})

class TaskManager{
    constructor(){
        this.tasks = []
    }

    addTask(title){
        this.tasks.push({title, status: "pending"})
        return this
    }

    completeTask(title){
        this.tasks = this.tasks.map(task =>task.title == title ? {...task, status: "completed"}: task)
        return this
    }

    filterTasks(status){
        this.tasks = this.tasks.filter(task => task.status == status)
        return this
    }

    listTasks(){
        console.log("Tasks:")
        this.tasks.forEach(task => console.log(`${task.title} - ${task.status}`))
        return this
    }

    sortTasks(){
        this.tasks.sort((a,b) => a.title.localeCompare(b.title));
        return this
    }

    countTasks(){
        const counts =this.tasks.reduce((acc,task) => { acc[task.status] = (acc[task.status] || 0) + 1
            return acc
        }, {})

        console.log(`Pending: ${counts.pending || 0}, Completed: ${counts.completed || 0}`)
        return this
    }
}

const manager = new TaskManager()

manager
    .addTask("Walk 5k steps")
    .addTask("Finish Assessments")
    .addTask("Revise finsihed Topics")
    .addTask("Watch CRICKET")
    .addTask("15mis Meditation")
    .completeTask("walk 5k steps")
    .completeTask("Finished Assessment")
    .sortTasks()
    .listTasks()
    .countTasks()
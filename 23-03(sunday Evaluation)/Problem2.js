function TaskManager(){
    let tasks =[]
    return {

        addTask(title){
            const task = {
                id: Date.now(),
                title,completed:false
            };
            tasks.push(task)
        },
        getAllTasks(){
            return JSON.stringify(tasks,null,2);
        },
        markComplete(taskId){
            let task =tasks.find(task => task.id == taskId)
            if(task) task.completed = true
        },
        removeTask(taskId){
            tasks =tasks.filter(task => task.id !== taskId)
        },
        getPendingTasks(){
            return tasks.filter(task => !task.completed).map(task => task.title)
        },
        getCompletedTasks(){
            return tasks.filter(task => task.completed).map(task => task.title)
        },
        sortTasks(){
            return tasks.map(task => task.title).sort((a,b) => a.localeCompare(b))
        }
    }
}

const myTask =TaskManager()

myTask.addTask("Read Book")
myTask.addTask("revise JAVA")
myTask.addTask("finish assessments")
myTask.addTask("Watch Cricket")

let getAllTasks = JSON.parse(myTask.getAllTasks())

myTask.markComplete(getAllTasks.find(task => task.title == "Read Book").id)
myTask.removeTask(getAllTasks.find(task => task.title =="Watch Cricket").id)

console.log("All Tasks:",myTask.getAllTasks())
console.log("Pending Tasks:",myTask.getPendingTasks())
console.log("Completed Tasks:",myTask.getCompletedTasks())
console.log("Sort Tasks:",myTask.sortTasks())


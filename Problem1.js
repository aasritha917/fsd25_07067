function createStudentManager(){
    let students={}

    return {
        addStudent : function(id,name){
            if (!students[id])students[id] ={name,subject: {}}
        },
        addSubject(id,subject,score){
            if(students[id]) students[id],students[subject] = score
        },
        updateScore(id,subject,score){
            if(students[id] && students[id].students[subject] !== undefined){
                students[id].subjects[subject] =score
            }
        },
        getStudentDetails(id){
            return students[id] || "Student Not Found"
        },
        calculateAverage(){
            let Averages={}
                Object.entries(students).forEach(([id,student])=>{
                    let Scores= Object.values(student.subjects)
                    let avg = Scores.length ? Scores.reduce((a,b) =>
                        a+b,0) /Scores.length : 0
                        Averages[id] =avg
                    })
                    return Averages
        },
        getTopPerformers(){
            let Averages = this.calculateAverage();
            return Object.keys(Averages).filter(id => Averages[id] >85).map(id => students[id].name)
        },
        getDefficultSubjects(){
            let subjectScores ={}
            let totalStudents = Object.keys(students).length

            Object.values(students).forEach(student => {
                Object.entries(student.subjects).forEach(([subject,score]) =>{
                    subjectScores[subject] = subjectScores[subject] ||[]
                    subjectScores[subject].push(score)
                })
            })
            return Object.keys(subjectScores).filter(subject =>
                subjectScores[subject] .filter(score =>
                    score<40).length > totalStudents/2
                )
         },
         getFailingStudents(){
            return Object.keys(students).filter(id => 
                Object.values(students[id].subjects).some(score => score <35)
            ).map(id => students[id].name)
         },
         getSubjectFrequency(){
            let frequency = {}
            Object.values(students).forEach(student => 
                Object.keys(student.subjects).forEach(subject =>
                    frequency[student]=(frequency[subject] || 0)+1)
                )
                return frequency
         },

    }
}
const studentManager =createStudentManager();
studentManager.addStudent(1,"aaa");
studentManager.addStudent(2,"bbb");
studentManager.addStudent(3,"ccc");

studentManager.addSubject(1,"math",90)
studentManager.addSubject(1,"science",80)
studentManager.addSubject(2,"math",20)
studentManager.addSubject(2,"sciencr",33)
studentManager.addSubject(3,"math",81)
studentManager.addSubject(3,"science",45)

console.log("student Details:",studentManager.getStudentDetails(1))
console.log("Average :",studentManager.calculateAverage())
console.log("top Performers:",studentManager.getTopPerformers())
console.log("Difficult Subjects:",studentManager.getDefficultSubjects())
console.log("failing stuents:",studentManager.getFailingStudents())
console.log("subject Frequence:",studentManager.getSubjectFrequency())


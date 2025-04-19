function studentclassify(studentScores) {
    for (let student in studentScores) {
        let score = studentScores[student];
        let grade = (score >= 90) ? "A" :
                    (score >= 80) ? "B" :
                    (score >= 70) ? "C" :
                    (score >= 60) ? "D" : "F";
        
        console.log(`${student} - ${grade}`);
    }
}

let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
};


studentclassify(studentScores);

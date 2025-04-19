const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];

  
  const activeStudents = studentsProgress.filter(student => 
    (student.completedLessons / student.totalLessons) * 100 >= 50
  );

  const activeStudentsWithPercentage = activeStudents.map(student => ({
    name: student.name,
    completionPercentage: ((student.completedLessons / student.totalLessons) * 100).toFixed(2) + "%"
  }));

  const totalCompletion = activeStudents.reduce((sum, student) => 
  sum + (student.completedLessons / student.totalLessons) * 100, 0);

  const averageCompletion = (totalCompletion / activeStudents.length).toFixed(2) + "%";
  const topLearners = activeStudentsWithPercentage.filter(student => 
    parseFloat(student.completionPercentage) > 80
  );
  
  console.log("Active Students with Completion Percentage:", activeStudentsWithPercentage);
  console.log("Average Course Completion Percentage:", averageCompletion);
  console.log("Top Learners:", topLearners);
  
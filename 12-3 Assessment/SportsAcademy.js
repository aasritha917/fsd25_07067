const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];

  const { name: firstName, sport: firstSport } = athletes[0];
console.log(`${firstName} plays ${firstSport}`);

const { scores: [firstScore, secondScore, ...remainingScores] } = athletes[2];
console.log(firstScore, secondScore, remainingScores);

const updatedNeeraj = { ...athletes[2], age: 27, worldChampion: true };
console.log(updatedNeeraj);

const allScores = [...athletes[0].scores, ...athletes[1].scores, ...athletes[2].scores];
console.log(allScores);
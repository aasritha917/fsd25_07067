function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"]
    students.splice(1, 0, "David")

    console.log("Is 'Eve' in the list?", students.includes("Eve"))

    console.log("Student List:", students.join(","))

    return students
}

let studentsList = manageStudents()

function testManageStudents() {
    console.log("Running Test Cases...")

    console.log(studentsList[1] === "David" ? " Test Passed: 'David' added at index 1" : " Test Failed")

    console.log(studentsList.includes("Eve") === false ? " Test Passed: 'Eve' not in list" : " Test Failed")

    let expectedOutput = "Alice,David,Bob,Charlie"
    console.log(studentsList.join(",") === expectedOutput ? "Test Passed: Join function works" : " Test Failed")

    studentsList.splice(2, 0, "Eve")
    console.log(studentsList.includes("Eve") === true ? "Test Passed: 'Eve' added successfully" : " Test Failed")

    console.log("All test cases executed.")
}

testManageStudents();

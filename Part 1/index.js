// Data Structures--------------------
const studentDatabase = ["Kasun", "rick", "jordan", "michel"];

// Algorithm for finding a specific user-------------------
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};
findStudent(studentDatabase, "rick");
const filter = (allStud, failStud) => {
  return allStud.filter((stud) => {
    return !failStud.includes(stud)
  });
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudents, failedStudents));

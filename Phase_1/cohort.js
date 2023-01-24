const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Nath', 'Juli', 'Lila']
};

function printMessage(argument){
  console.log(argument.id); //outputs: 1234
  console.log(argument['name']); //outputs: May2022
  console.log(argument.students); //outputs: ['Nath', 'Juli', 'Lila']
  console.log(argument.students.length); //outputs: 3
}

console.log(printMessage(cohort));
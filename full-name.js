const fullName = ({firstName, middleName, lastName}) => `${firstName} ${middleName[0]}. ${lastName}`.toUpperCase()

student = {
  firstName: "John",
  middleName: "Hello",
  lastName: "Simons",
  age: 12,
  id: 918552
}

console.log(fullName(student))
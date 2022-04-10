function test() {
  const hello: string = 'Hola'

  interface User {
    name: string,
    surname: string,
    age: int,
    gender: string,
		role: string,
    pets: array
  }

  const persons: User = [
    {
      name: "Nawe",
      surname: "Santillan",
      age: 18,
      gender: "Male",
      role: "Web / Web3 Developer",
      pets: ["Coly, Molly"]
    },
    {
      name: "Vani",
      surname: "Gonzalez",
      age: 19,
      gender: "Female",
      role: "Master Builder",
      pets: ["Theo"]
    }
  ]

  const np = persons.length
  
  console.table(persons)
  console.log(`Hay ${np} persona${np > 1 ? "s" : ""} en la tabla`)
  

  
  console.log(isValid)
}

test()

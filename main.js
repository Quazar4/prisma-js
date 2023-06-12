const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createPerson(name, age) {
  const person = await prisma.person.create({
    data: {
      name,
      age,
    },
  });
  return person;
}

async function getAllPersons() {
  const persons = await prisma.person.findMany();
  return persons;
}

async function runExample() {
  const person = await createPerson("Percy", 18);
  console.log(person);

  const persons = await getAllPersons();
  console.log(persons);
}

runExample()
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    prisma.$disconnect();
  });

var faker = require("faker");

var database = { guides: [] };

for (var i = 1; i <= 300; i++) {
  database.guides.push({
    id: i,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    city: faker.address.city(),
    country: faker.address.country(),
    title: faker.name.title()
  });
}

console.log(JSON.stringify(database));

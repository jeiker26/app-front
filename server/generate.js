var faker = require("faker");

var database = { users: [] };

for (var i = 1; i <= 30; i++) {
  database.users.push({
    id: i,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    username: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      country: faker.address.country(),
      zipcode: faker.address.zipCode(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude()
      }
    }
  });
}

console.log(JSON.stringify(database));

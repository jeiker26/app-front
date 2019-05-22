var faker = require("faker");

var database = {
  news: []
};

for (var i = 1; i <= 30; i++) {
  database.news.push({
    id: i,
    image: faker.image.imageUrl(),
    title: faker.lorem.words(),
    description: faker.lorem.text(),
    uri: faker.image.imageUrl()
  });
}

console.log(JSON.stringify(database));



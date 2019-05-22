var faker = require("faker");

var database = {
  news: {
    page: {
      items: [],
      number: 1,
      size: 30,
      offset: 0,
      total: 30,
      totalPages: 1,
      numElements: 30
    }
  }
};

for (var i = 1; i <= 30; i++) {
  database.news.page.items.push({
    id: i,
    image: faker.image.imageUrl(),
    title: faker.lorem.words(),
    description: faker.lorem.text(),
    uri: faker.image.imageUrl()
  });
}

console.log(JSON.stringify(database));



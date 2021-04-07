var faker = require("faker");
var database = { products: [] };
for (var i = 1; i <= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl:
      "https://boypiano.co.uk/wp-content/uploads/2019/04/box-celebration-gift-260184.jpg",
    quantity: faker.Number,
  });
}
console.log(JSON.stringify(database));

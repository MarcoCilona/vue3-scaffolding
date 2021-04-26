const faker = require('faker');
const users = [];

// Create 1000 users
for (let i = 0; i < 1000; i++) {
  users.push({ id: i, name: faker.name.findName() });
}

module.exports = users;

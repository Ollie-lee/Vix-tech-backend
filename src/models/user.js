const { v4: uuidv4 } = require("uuid");

module.exports = class User {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.id = uuidv4();
  }
};

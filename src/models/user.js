const { v4: uuidv4 } = require("uuid");

module.exports = class User {
  constructor(name, gender, age, id) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.uuid = uuidv4();
  }
};

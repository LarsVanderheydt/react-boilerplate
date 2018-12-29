export default class User {
  id = 0;
  name = "";
  username = "";
  email = "";

  constructor({ id, name, username, email }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
  }
}
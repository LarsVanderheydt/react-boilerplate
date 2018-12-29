export default {

  read() {
    return fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => json.map(d => d));
  },

  getById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json => json);
  }
};
import {
    observable,
    computed,
    action
} from 'mobx';

import UsersAPI from '../lib/api/users';
import User from '../Models/User';

class Store {
    @observable
    users = [];

    @observable
    page = "homepage"

    @observable
    user = [];

    constructor() {
        UsersAPI.read()
            .then(d => this._addUser(...d));
    }

    @action
    _addUser = (...users) => {
        users.forEach(user => {
            this.users.push(
                new User(user)
            );
        });
    }

    getUser = id => {
        return this.users.find(a => a.id === parseInt(id));
    }
}


const store = new Store();

if (process.env.NODE_ENV !== `production`) {
    window.store = store;
}

export default store;
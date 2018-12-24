import {
    observable,
    computed,
    action
} from 'mobx';

class Store {
    @observable
    name = "welcome to the react boilerplate home page"

    @observable
    main_menu = [
        {
            "label": "home",
        },
        {
            "label": "contact"
        }
    ]
}


const store = new Store();

if (process.env.NODE_ENV !== `production`) {
    window.store = store;
}

export default store;
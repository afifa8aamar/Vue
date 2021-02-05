import axios from 'axios';
import { createStore } from 'vuex'

const state = {}

const actions = {
    getUsers({ commit }) {
        axios.get('http://localhost:3000/users')
        .then(response => {
            commit('SET_USERS', response.data)
        })
    },
    setUser({ commit }, { name, surname, userId, date, gender}) {
        return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/insert', {
            "name" : name,
            "surname" : surname,
            "userId" : userId,
            "date" : date,
            "gender" : gender,
          })
          .then(() => {
              console.log();
            commit('SET_USER',  { name, surname, userId, date, gender})
            resolve(true);
          })
          .catch(error => {
            reject(error);
          });
        })
    }
}

const mutations = {
    SET_USERS(state, users) {
        state.users = users
    },
    SET_USER( state, user) {
        console.log(state.users.users, user);
        state.users.users.push({
            'name' : user.name ,
            'surname' : user.surname,
            'userId' : user.userId,
            'date' : user.date,
            'gender' : user.gender,
        })
    }

}

const store = createStore({
    state,
    mutations,
    actions
  });

export default store;

import axios from "axios";

export default {
  GET_CONTACTS({commit}) { //fetching data
    if (localStorage.getItem('contacts')) {
      let data = localStorage.getItem('contacts');
      commit('GET_CONTACTS_TO_STATE', JSON.parse(data));
    } else {
      return axios.get('http://demo.sibers.com/users')
        .then(response => {
          const contacts = response.data.map(item => {
            return {
              id: item.id,
              name: item.name,
              email: item.email,
              phone: item.phone,
              website: item.website,
              avatar: item.avatar
            }
          });
          commit('GET_CONTACTS_TO_STATE', contacts);
          localStorage.setItem('contacts', JSON.stringify(contacts));
        })
        .catch(e => console.log(e));
    }
  },
  SET_SEARCH_VALUE({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_STATE', value);
  }
}
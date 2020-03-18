export default {
  GET_CONTACTS_TO_STATE(state, data) {
    state.contacts = data;
  },
  CHANGE_CONTACT(state, index) { // функция изменения контакта, вызванная из contactList.vue
    console.log(index);
    const contact = state.contacts.find(item => {
      return item.id === index;
    });
    console.log(contact);
    const contactsInStorage = JSON.parse(localStorage.getItem('contacts'));
    contactsInStorage[index] = contact;
    localStorage.setItem('contacts', JSON.stringify(contactsInStorage));
    alert('Updated');
  },
  SET_SEARCH_VALUE_TO_STATE(state, value) {
    state.searchValue = value;
  }
}
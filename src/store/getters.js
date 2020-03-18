export default {
  CONTACTS(state) {
    let sortContacts = state.contacts.sort((a, b) => { // сортировка по алфавиту
      let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
    });
    sortContacts = sortContacts.reduce((r, e) => { // сортировка по первой букве
      let group = e.name[0];
      if(!r[group]) r[group] = {group, children: [e]};
      else r[group].children.push(e);
      return r;
    }, {});
    console.log(Object.values(sortContacts));
    return Object.values(sortContacts); // массив с отсортированными контактами
  },
  SEARCH_VALUE(state) {
    return state.searchValue;
  }
}
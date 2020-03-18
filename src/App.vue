<template>
  <div id="app" class="app">
      <div class="container">
          <div class="app-block">
              <h1 class="app__header">Contacts</h1>
              <div class="app__search">
                  <input type="text" v-model="searchValue">
                  <button @click="search(searchValue)">Search</button>
              </div>
              <button v-if="searchValue.length" @click="search('')">All contacts</button>
              <contactList />
          </div>
      </div>
  </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import contactList from "./components/contactList";

    export default {
      components: {
        contactList
      },
      data() {
        return {
          searchValue: '',
          sortedContacts: []
        }
      },
      computed: {
        ...mapGetters([
          'SEARCH_VALUE'
        ])
      },
      methods: {
        ...mapActions([
          'GET_CONTACTS',
          'SET_SEARCH_VALUE'
        ]),
        search(value) {
          this.SET_SEARCH_VALUE(value);
        }
      },
      mounted() {
        this.GET_CONTACTS()
      }
    }
</script>

<style lang="scss">
    body {
        font-family: Arial, 'sans-serif';
    }
    .container {
        width: 80%;
        margin: 0 auto;
    }
    .app {
        &-block {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__header {
            font-size: 30px;
            font-weight: bold;
            margin: 40px 0;
        }
        &__search {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            width: 50%;
        }
        &__search > input {
            border: 1px solid rgba(#222 , 0.5);
            height: 40px;
            width: 80%;
            &:hover {
                border: 1px solid rgba(#222 , 1);
            }
            &:focus {
                border: 1px solid rgba(#222 , 1);
            }
        }
        &__search > button {
            border: 1px solid black;
            height: 44px;
            width: 20%;
        }
    }
    @media screen and (max-width: 968px){
        .container {
            width: 90%;
        }
    }
    @media screen and (max-width: 768px){
        .app {
            &__search {
                width: 90%;
            }
            &__search > input {
                width: 70%;
            }
            &__search > button {
                width: 30%;
            }
        }
    }
</style>

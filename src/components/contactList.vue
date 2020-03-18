<template>
    <div class="contactList">
        <div class="contactList-group" v-for="item in filteredContacts" :key="item.group">
            <div class="contactList-group__info" v-if="item.children.length">
                <div class="contactList-group-item">
                    <h3>{{item.group}}</h3>
                </div>
                <contact
                        v-for="contact in item.children"
                        :key="contact.id"
                        :contact_data="contact"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import contact from "./contact";
    import { mapGetters } from 'vuex'

    export default {
      name: 'contactList',
      components: {
        contact
      },
      data() {
        return {
          sortedContacts: []
        }
      },
      computed: {
        ...mapGetters([
          'CONTACTS', // get Contacts from store
          'SEARCH_VALUE'
        ]),
        filteredContacts() {
          if (this.sortedContacts.length) {
            return this.sortedContacts;
          } else {
            return this.CONTACTS;
          }
        }
      },
      watch: {
        SEARCH_VALUE() {
          this.sortContactsByValue(this.SEARCH_VALUE);
        }
      },
      methods: {
        sortContactsByValue(value) { // поиск контактов
          this.sortedContacts = [...this.CONTACTS];
          if (value) {
            this.sortedContacts = this.sortedContacts.map(item => {
              return {
                group: item.group,
                children: item.children.filter(key => {
                  return key.name.toLowerCase().includes(value.toLowerCase());
                })
              }
            })
            } else {
            this.sortedContacts = this.CONTACTS;
          }
        }
      },
      mounted() {
        this.sortContactsByValue(this.SEARCH_VALUE);
      }
    }
</script>

<style lang="scss">
    .contactList {
        width: 100%;
        &-group {
            &-item {
                display: flex;
                height: 30px;
                width: 30px;
                justify-content: center;
                align-items: center;
                box-shadow: 0 0 30px rgba(black, .5);
                border-radius: 5px;
                margin: 40px 0px;
            }
        }
    }
</style>
<template>
    <div class="contact">
        <div class="contact-wrap">
            <div class="contact-main" @click="allInfo = !allInfo">
                <img :src="contact_data.avatar" alt="" class="contact-main__avatar">
                <p class="contact-main__name">{{contact_data.name}}</p>
            </div>
            <transition name="allInfo">
                <div class="allInfo" v-show="allInfo">
                    <div class="allInfo-item">
                        <p>Name:</p>
                        <input type="text" v-model="contact_data.name">
                    </div>
                    <div class="allInfo-item">
                        <p>Email:</p>
                        <input type="text" v-model="contact_data.email">
                    </div>
                    <div class="allInfo-item">
                        <p>Phone:</p>
                        <input type="text" v-model="contact_data.phone">
                    </div>
                    <div class="allInfo-item">
                        <p>Website:</p>
                        <input type="text" v-model="contact_data.website">
                    </div>
                    <button class="allInfo__btn" @click="editContact(contact_data.id)">Save</button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
      name: 'contact',
      props: {
        contact_data: { // props from contactList
          type: Object,
          default() {
            return {}
          }
        }
      },
      data() {
        return {
          allInfo: false
        }
      },
      methods: {
        ...mapMutations([
          'CHANGE_CONTACT'
        ]),
        editContact(index) { // редактирование контакта
            if (this.contact_data.name === '') {
              alert('Name must not be empty');
            } else {
              this.CHANGE_CONTACT(index);
            }
        }
      }
    }
</script>

<style lang="scss">
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0px;
        margin-bottom: 20px;
        transition: .3s;
        border-bottom: 2px solid rgba(#222, .1);
        border-radius: 10px 10px 0 0 ;
        &-wrap {
            width: 90%;
        }
        &:hover {
            box-shadow: 0 0 30px rgba(#000, .05);
            border-bottom: 2px solid rgba(#222, 1);
            transition: .3s;
        }
        &-main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &__avatar {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
            &__name {
                font-size: 20px;
            }
        }
    }
    .allInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        width: 100%;
        &-item {
            margin-bottom: 10px;
        }
        &-item > p {
            margin-bottom: 5px;
        }
        &-item > input {
            width: 400px;
        }
        &__btn {
            width: 400px;
            transition: .3s;
            border: 1px solid rgba(#222, .1);
            &:hover {
                background-color: #000000;
                color: #fff;
                transition: .3s;
            }
        }
    }
    @media screen and (max-width: 550px) {
        .allInfo {
            width: 100%;
            &-item {
                width: 100%;
                margin-bottom: 15px;
            }
            &-item > input{
                width: 100%;
            }
            &__btn {
                width: 100%;
            }
        }
    }
</style>
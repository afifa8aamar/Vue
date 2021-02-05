<template>
<div class="wrap">
  <h1>Dashboard</h1>
  <table v-if="users && fields" class="styled-table">
    <thead>
      <tr>
        <th v-for='field in fields' :key='field.id'>{{field.title}}</th>
      </tr>
      <tr>
        <th v-for='field in fields' :key='field.id'>
          <input :placeholder=field.title type="text" v-model="field.search" @keyup="searchSomething">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='user in users.users' :key='user.id'>
        <td v-for='field in fields' :key='field.id'>
            {{user[field.field]}}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>

export default {
  name: 'Dashboard',
  data: () => ({
    search : '',
    fields : [
      {field : "name", title : "სახელი", search : ''},
      {field : "surname", title : "გვარი", search : ''},
      {field : "userId", title : " პირადობის ნომერი", search : ''},
      {field : "date", title : "დაბადების თარიღი", search : ''},
      {field : "gender", title : "სქესი", search : ''}]
    
  }),
  methods: {
    searchSomething() {
      this.fields.map(f => {
        if(f.search) {
          this.$store.state.users.users = this.$store.state.users.users.filter(user=> f.search == user[f.field])
        } 
      })
      if(!this.fields.find(f => f.search != '')) {
        this.$store.dispatch("getUsers");
      }
      
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch("getUsers");
  }
}
</script>

<style>
  @import './Dashboard.scss';
  @import './Dashboard-mobile.scss';
</style>
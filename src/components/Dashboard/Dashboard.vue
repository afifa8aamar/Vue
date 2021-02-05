<template>
  <h1>Dashboard</h1>
  <table v-if="users && fields" class="styled-table">
    <thead>
      <tr>
        <th v-for='field in fields' :key='field.id'>{{field.title}}</th>
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
</template>

<script>

export default {
  name: 'Dashboard',
  data: () => ({
    fields : [
      {field : "name", title : "სახელი"},
      {field : "surname", title : "გვარი"},
      {field : "userId", title : " პირადობის ნომერი"},
      {field : "date", title : "დაბადების თარიღი"},
      {field : "gender", title : "სქესი"}]
    
  }),
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
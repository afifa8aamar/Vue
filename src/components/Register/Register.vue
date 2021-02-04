<template>
  <div class="wrapper">
    <div class="right">
      <img alt="Vue logo" src="../../assets/logo.png">
    </div>
    <div class="left">
      <div class="head">
        <h1>რეგისტრაცია</h1>
        <p>შეიყვანეთ მონაცემები</p>
      </div>
      <div class="wrap-input">
        <label><b>სახელი</b></label>
        <input 
          type="text" 
          placeholder="შეიყვანეთ სახელი" 
          v-model="name" 
          name="name" 
          id="name" >  
      </div>
      <div class="wrap-input">
        <label><b>გვარი</b></label>
        <input 
          type="text" 
          placeholder="შეიყვანეთ გვარი" 
          v-model="surname" 
          name="surname" 
          id="surname" >
      </div>
      <div class="wrap-input">
        <label><b>პირადობის ნომერი</b></label>
        <input 
          type="text" 
          placeholder="შეიყვანეთ პირადობის ნომერი" 
          v-model="userId" 
          name="userId" 
          id="userId" >
      </div>
      <div class="wrap-input">
        <label><b>დაბადების თარიღი</b></label>
        <input type="date" id="date" name="date" v-model="date" >
      </div>
      <div class="wrap-input">
        <label><b>სქესი</b></label>
        <select id="gender" name="gender" v-model="gender">
          <option value="">აირჩიეთ სქესი</option>
          <option value="მამრობითი">მამრობითი</option>
          <option value="მდედრობითი">მდედრობითი</option>
        </select>
      </div>
      <div class="error" v-if="error">{{error}}</div>
      <button @click="register" type="submit" class="registerbtn">რეგისტრაცია</button>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    name : "",
    surname : "",
    userId : '',
    date : '',
    gender : '',
    error : ''
  }),
  methods : {
    register() {
      if(this.userId.toString().length != 11 || /^\d+$/.test(this))
        this.error ='გთხოვთ შეიყვანეთ ვალიდური პირადი ნომერი'
    }
  },
}
</script>

<style>
  @import './register.scss';
  @import './register-mobile.scss';
</style>